import { useDebounce } from "@/hooks/useDebounce";
import { useFetch } from "@/hooks/useFetch";
import { useState, useContext, useEffect } from "react";
import { ResultsContext } from "@/context/resultsContext";
import { type SearchResponse } from "@/types/types";


export default function Searcher() {
  const [query, setQuery] = useState<string>();
  const debouncedQuery = useDebounce(query, 400);
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?query=${debouncedQuery}`
  const {data, loading, error, retry } = useFetch<SearchResponse>(SEARCH_URL);
  
  const ctx = useContext(ResultsContext);
  if (!ctx) return null;
  const { results, setResults } = ctx;  
  
  useEffect(()=>{
    if(data){
      setResults(data?.results)
    }
  })
  
  return (
    <form className="mt-7">
      <div className="border-3 border-button bg-secondary rounded-full px-10">
        <input
          type="search"
          placeholder="Search your favorite movies"
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
          className="text-white caret-white w-full h-17 text-xl focus:outline-0"
        />
      </div>
    </form>
  );
}
