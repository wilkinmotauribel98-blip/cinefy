import { useParams } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch";
import { type DetailsMovieType, type DetailsSeriesType  } from "@/types/Details";
import Hero from "@/components/details/Hero";

export default function DetailsPage(){
  const { id, mediaType, title } = useParams();
  const DETAILS_URL = `https://api.themoviedb.org/3/${mediaType}/${id}?language=en-US`;
  const { data } = useFetch<DetailsMovieType | DetailsSeriesType>(DETAILS_URL);

  if(!data) return null 
  
  return(
    <main className="max-w-360 m-auto">
      <Hero details={data} title={title || ''}/>
    </main> 
  )
}