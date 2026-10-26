import { useParams } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch";
import { type DetailsMovieType, type DetailsSeriesType  } from "@/types/Details";
import Hero from "@/components/details/Hero";
import MainCast from "@/components/details/MainCast";

export default function DetailsPage(){
  const { id, mediaType } = useParams();
  const DETAILS_URL = `https://api.themoviedb.org/3/${mediaType}/${id}?language=es-ES&append_to_response=credits,videos`;
  const { data } = useFetch<DetailsMovieType | DetailsSeriesType>(DETAILS_URL);

  if(!data) return null 
  if(mediaType !== 'movie' && mediaType !== 'tv') return
  return(
    <main className="max-w-360 m-auto  ">
      <Hero details={data}  media={mediaType}/>
      <MainCast cast={data.credits.cast}/>
    </main> 
  )
}