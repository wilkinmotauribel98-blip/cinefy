import { Tags } from "./HomeContent";
import { useMemo } from "react";
import { type SearchResponse } from "@/types/types";
import ResultCard from "./ResultCard";
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

type RenderResultsProps ={
  filter?: string,
  data : SearchResponse,
  actualPage?: number,
  query?: string
}

export default function RenderResults({ filter, data, actualPage, query }:RenderResultsProps){
  const navigate = useNavigate()
  const [ searchParams, setSearchParams ] = useSearchParams();
  const location  = useLocation();
  const { ALL, MOVIES, SERIES } = Tags;
  const { results, total_results } = data;
  results.filter(e => e.media_type == 'movie' || e.media_type === 'tv')
  const filtereds = useMemo(()=>{
      if(filter === ALL) return results;
      else if(filter === MOVIES) return results.filter(e => e.media_type === 'movie');
      else if(filter === SERIES) return results.filter(e => e.media_type === 'tv')
      else return results
    }, [filter, results])
    

  const mediaPages = Array.from({length: 5})
    
  function goToPage(i:number) {
      setSearchParams((prev)=>{
        const params = new URLSearchParams(prev);
        params.set('page', String(i));
        return params
      })
    }

  return(
   <section className="mt-6">
    <div className="flex justify-between">
      <h2 className="text-2xl text-white font-semibold">Results</h2>
      <p className="text-lg text-zinc-400 ">{total_results} Results</p>
    </div>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] mt-5 grid-rows-1 gap-4">
      {filtereds.map((r)=> <ResultCard key={r.id} result={r}/>)}
    </div>
    {data.results.length && <div className="flex gap-2 my-5">
      <span 
        className={`bg-secondary py-3 px-5 text-white rounded-xl `}
        onClick={()=>{
          if(actualPage !== undefined){
            goToPage(actualPage + 1)
          }
        }}
      >a</span>
      {mediaPages.map((_, i)=><span 
        key={i}
        className={`bg-secondary py-3 px-5 text-white rounded-xl `}
        onClick={()=>{
          if(location.pathname.includes('search')) goToPage(i + 1);
          else {
            navigate(`/search/?q=${query}&page=${i+1}`)
          }
        }}
      >{i + 1}</span>
      )}
    </div>}
   </section>
  )
      
    
  
}