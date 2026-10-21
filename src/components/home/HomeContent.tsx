import TagButton from "../ui/TagButton"
import RenderResults from "./RenderResults";
import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { type SearchResponse } from "@/types/types";
import { useSearchParams } from "react-router-dom";
export const Tags = {
  MOVIES: 'Movies',
  SERIES: 'Series',
  FAVORITES: 'Favorites',
  ALL: 'All'
}

export default function HomeContent(){

  const [searchParams] = useSearchParams()
  const { MOVIES, SERIES, FAVORITES, ALL } = Tags
  const [active, setActive] = useState<string>(ALL);
  const [size, setSize] = useState<number>(window.innerWidth);
  const [query, setQuery] = useState<string>(); 
  const debouncedQuery = useDebounce(query, 400);
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${debouncedQuery || ''}`
  const { data } = useFetch<SearchResponse>(SEARCH_URL);

  
  useEffect(()=>{
    
  })
  useEffect(()=>{
    const sizer = ()=> setSize(window.innerWidth);
    addEventListener('resize', sizer);
    return ()=> removeEventListener('resize', sizer)
  }, [])

  useEffect(()=>{
    size < 768 && active === FAVORITES && setActive(ALL) 
  }, [active, size])
  

  if(!data) return
  
  return(
    <>

    <form className="mt-7">
      <div className="border-3 border-button bg-secondary rounded-full px-10">
        <input
          type="search"
          placeholder="Search your favorites movies"
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
          className="text-white caret-white w-full h-17 text-xl focus:outline-0"
        />
      </div>
    </form>

    <section className="flex gap-3 mt-5 ">
      <TagButton title={ALL} isActive={active == ALL} setActive={setActive} />
      <TagButton title={MOVIES} isActive={active == MOVIES} setActive={setActive}/>
      <TagButton title={SERIES} isActive={active == SERIES} setActive={setActive}/>
      {size >= 768 && <TagButton title={FAVORITES} isActive={active == FAVORITES} setActive={setActive} />}
    </section>

    <RenderResults filter={active} data={data} query={query}/>
    
    </>

  )
}