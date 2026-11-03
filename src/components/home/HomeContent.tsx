import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { useDelayedFlag } from "@/hooks/useDelayedFlag";
import type { SearchResponse } from "@/types";
import { Tags } from "./tags";
import { useSavedQuery } from "@/hooks/useSavedQuery";
import { publicUrl } from "@/utils/publicURL";


import TagButton from "../ui/TagButton"
import RenderResults from "./RenderResults";
import RenderResultsSkeleton from "./RenderResultsSkeleton";


export default function HomeContent(){
  const { MOVIES, SERIES, FAVORITES, ALL } = Tags;
  const [active, setActive] = useState<(typeof Tags)[keyof typeof Tags]>(ALL);
  const [size, setSize] = useState<number>(window.innerWidth);
  const [query, setQuery] = useState<string | undefined>(() => {
    const { isQuerySaved, savedQuery } = useSavedQuery.getState();
    return isQuerySaved && savedQuery ? savedQuery : undefined;
  });
  const debouncedQuery = useDebounce(query, 400);
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${debouncedQuery || ''}`;
  const TRENDING_URL = 'https://api.themoviedb.org/3/trending/all/week?language=en-US';
  const { data, loading, error } = useFetch<SearchResponse>(debouncedQuery?.length ? SEARCH_URL : TRENDING_URL);
  const { setSavedQuery } = useSavedQuery();
  const showNoResults = useDelayedFlag(!loading && !error && !data);
  
  
  useEffect(()=>{
    const sizer = ()=> {
      const nextSize = window.innerWidth;
      setSize(nextSize);
      if(nextSize < 768) {
        setActive(current => current === Tags.FAVORITES ? Tags.ALL : current)
      }
    };
    addEventListener('resize', sizer);
    return ()=> removeEventListener('resize', sizer)
  }, [])

  useEffect(()=>{setSavedQuery(debouncedQuery || '')}, [debouncedQuery, setSavedQuery])

  return(
    <>
    <form 
      className="mt-7"
      role="search"
      onSubmit={(e)=> e.preventDefault()}
      >
      <div className="border-3 border-button flex items-center gap-4 bg-secondary rounded-full px-10 focus-within:ring-2 focus-within:ring-white/60">
        <svg className='w-6 h-6  text-zinc-400 '>
          <use href={publicUrl('/icons.svg#icon-search')}></use>
        </svg>
        <input
          name="search"
          type="search"
          aria-label="Search movies and series"
          placeholder="Search movies and series"
          value={query || ''}
          autoComplete="off"
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
          className="text-zinc-300 caret-white w-full h-17 text-xl focus:outline-0"
        />
      </div>
    </form>

    <section 
      className="flex gap-3 mt-5"
      role="group"
      aria-label="Filter results"
      >
      <TagButton title={ALL} isActive={active == ALL} setActive={setActive} />
      <TagButton title={MOVIES} isActive={active == MOVIES} setActive={setActive}/>
      <TagButton title={SERIES} isActive={active == SERIES} setActive={setActive}/>
      {size >= 768 && <TagButton title={FAVORITES} isActive={active == FAVORITES} setActive={setActive} />}
    </section>

    {loading && <RenderResultsSkeleton />}

    {!data && !loading && (
      <p role="alert" className="text-zinc-400 text-lg mt-7">
        Results could not be loaded.
      </p>
    )}

    {!loading && !error && data && (
      <RenderResults filter={active} data={data} query={query}/>
    )}

    {showNoResults && (
      <p role="status" className="text-zinc-400 text-lg mt-7">
        No results found.
      </p>
    )}

    </>

  )
}