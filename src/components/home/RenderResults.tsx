import { Tags } from "./HomeContent";
import { useMemo } from "react";
import { type SearchResponse } from "@/types/types";
import ResultCard from "./ResultCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../ui/Pagination";
type RenderResultsProps ={
  filter?: string,
  data : SearchResponse,
  query?: string
}

// Pagination shows the first and last page at the edges, a window around the
// current page, and ellipses in between.

// TMDB returns 20 results per page; after discarding "person" (and other items
// without a poster) the number of cards per page varies. Known limitation of /search/multi.


export default function RenderResults({ filter, data, query }:RenderResultsProps){
  const [ searchParams ] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const q = searchParams.get('q') ?? query ?? '';
  
  const { ALL, MOVIES, SERIES } = Tags;
  const { results, total_results, total_pages } = data;

  const filtereds = useMemo(()=>{
    switch(filter){
      case ALL: return results.filter(e => e.media_type == 'movie' || e.media_type === 'tv');
      break;
      case MOVIES: return results.filter(e => e.media_type === 'movie')
      break;
      case SERIES: return results.filter(e => e.media_type === 'tv')
      break;
      default: return results.filter(e => e.media_type == 'movie' || e.media_type === 'tv');
    }
    }, [filter, results])

    
  return(
   <section className="px-5 mt-5">
    <div className="flex justify-between">
      {filtereds.length > 0 && <>
      <h2 className="text-2xl text-white font-semibold">Results</h2>
      <p role="status" aria-live="polite" className="text-lg text-zinc-400 ">
        Showing {filtereds.length} of {total_results} results
      </p>
      </>}
    </div>
    {filtereds.length === 0 && query && (
      <p role="status" className="text-zinc-400 text-lg mt-5">
        No results found.
      </p>
    )}
    <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-5 gap-4 md:gap-7">
      {filtereds.map((r)=> <ResultCard key={r.id} result={r}/>)}
    </div>
    {filtereds.length > 0 && <nav aria-label="Pagination">
      <ul className="flex gap-2 my-5 w-fit m-auto">
        <Pagination query={q} page={page} total_pages={total_pages}/>
      </ul>
    </nav>}
   </section>
  ) 
}