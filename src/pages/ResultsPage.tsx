import RenderResults from "@/components/home/RenderResults"
import { useSearchParams } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import { type SearchResponse } from "@/types/types";
export default function ResultPage(){ 
  const [searchParams] = useSearchParams()
  const SEARCH_URL = `https://api.themoviedb.org/3/search/multi?query=${searchParams.get('q')}&page=${searchParams.get('page') || 1}`
  const { data } = useFetch<SearchResponse>(SEARCH_URL);
  if(!data) return
  return(
    <>
     <RenderResults data={data} actualPage={Number(searchParams.get('page')) || 1}  />
    </>
  )
}