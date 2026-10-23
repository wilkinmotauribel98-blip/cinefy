import RenderResults from "@/components/home/RenderResults"
import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { type SearchResponse } from "@/types/types";
export default function ResultPage(){ 
  const [searchParams] = useSearchParams()
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${searchParams.get('q')}&page=${searchParams.get('page') || 1}`
  const { data, loading } = useFetch<SearchResponse>(SEARCH_URL);
  if(!data) return (
    <main className="mb-22 max-w-360 m-auto mt-7">
      <p role="status" className="text-zinc-400 text-lg px-5">
        {loading ? "Loading results…" : "Results could not be loaded."}
      </p>
    </main>
  )
  return(
    <main className="mb-22 max-w-360 m-auto mt-7">
     <h1 className="sr-only">Search results</h1>
     <RenderResults data={data} />
    </main>
  )
}