import { Tags } from "./tags";
import { useMemo } from "react";
import { useDelayedFlag } from "@/hooks/useDelayedFlag"
import { useFavorites } from "@/hooks/useFavorites";
import { type SearchResponse } from "@/types/types";
import ResultCard from "./ResultCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";

type RenderResultsProps ={
  filter?: string,
  data : SearchResponse,
  query?: string
}
// TMDB returns 20 results per page; after discarding "person" (and other items
// without a poster) the number of cards per page varies. Known limitation of /search/multi.


export default function RenderResults({ filter, data, query }:RenderResultsProps){
  const { isFavorite } = useFavorites()
  const [ searchParams ] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const q = searchParams.get('q') ?? query ?? '';
  
  const { ALL, MOVIES, SERIES, FAVORITES } = Tags;
  const { results, total_results, total_pages } = data;

  const filtereds = useMemo(()=>{
    switch(filter){
      case ALL: return results.filter(e => e.media_type == 'movie' || e.media_type === 'tv');
      break;
      case MOVIES: return results.filter(e => e.media_type === 'movie')
      break;
      case SERIES: return results.filter(e => e.media_type === 'tv')
      break;
      case FAVORITES: return results.filter(e => isFavorite(e.id))
      default: return results.filter(e => e.media_type == 'movie' || e.media_type === 'tv');
    }
    }, [ALL, MOVIES, SERIES, filter, results])

  const showNoResults = useDelayedFlag(filtereds.length === 0 && Boolean(query));


  return(
   <section className="mt-5">
    <div className="flex justify-between px-3">
      {filtereds.length > 0 && <>
      <h2 className="text-2xl text-white font-semibold">Results</h2>
      <p role="status" aria-live="polite" className="text-lg text-zinc-400 ">
        Showing {filtereds.length} of {total_results} results
      </p>
      </>}
    </div>
    {showNoResults && (
      <p role="status" className="text-zinc-400 text-lg mt-5">
        No results found.
      </p>
    )}
    <div className="grid px-3 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-5 gap-4 md:gap-7">
      {filtereds.map((r, i)=> 
        <ResultCard 
          key={r.id}  
          isLazy={i > 7}
          image={r.poster_path || r.backdrop_path}
          title={r.title || r.name || ''}
          mediaType={r.media_type}
          firstAirDate={r.first_air_date || r.release_date}
          id={r.id}
          rating={r.vote_average}
          />)}
    </div>
    {filtereds.length > 0 && <nav aria-label="Pagination">
      <ul className="flex gap-2 my-15 w-fit m-auto">
        <Pagination query={q} page={page} total_pages={total_pages}/>
      </ul>
    </nav>}
   </section>
  ) 
}