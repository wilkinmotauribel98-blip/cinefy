import RenderResults from "@/components/home/RenderResults"
import RenderResultsSkeleton from "@/components/home/RenderResultsSkeleton"
import ErrorState from "@/components/ui/ErrorState";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { type SearchResponse } from "@/types/types";
export default function ResultPage(){ 
  const [searchParams] = useSearchParams()
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${searchParams.get('q')}&page=${searchParams.get('page') || 1}`
  const { data, loading, error, retry } = useFetch<SearchResponse>(SEARCH_URL);

  console.log(error?.message);
  
  return(
    <main className="mb-22 max-w-360 m-auto mt-7">
     <h1 className="sr-only">Search results</h1>

     {loading && <RenderResultsSkeleton />}

     {!loading && error && (
       <p role="alert" className="text-zinc-400 text-lg px-5">
         Results could not be loaded.
       </p>
     )}

     {error && !data && !loading  && <ErrorState 
          title={error?.message === "HTTP 404" ? "Results not found" : "Couldn't load this results"}
          message="Check your connection and try again."
          onRetry={error?.message === "HTTP 404" ? undefined : retry}
               />
           }

     {!loading && !error && data && <RenderResults data={data} />}
    </main>
  )
}