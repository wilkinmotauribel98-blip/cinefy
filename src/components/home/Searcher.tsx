import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { useState, useEffect } from "react";
import { useResults } from "@/hooks/useResults";
import { type SearchResponse } from "@/types/types";


export default function Searcher() {
  const [query, setQuery] = useState<string>();
  
  const debouncedQuery = useDebounce(query, 400);
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${debouncedQuery || "" }&page=1`
  const { data } = useFetch<SearchResponse>(SEARCH_URL);
  const { setSearchResponse } = useResults();

  useEffect(()=>{
    if(data) {
      setSearchResponse(data)
      
    }

    }, [data])
  
  return (
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
  );
}
