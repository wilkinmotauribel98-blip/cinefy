import { useParams } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch";
import { type DetailsMovieType, type DetailsSeriesType  } from "@/types/Details";
import Hero from "@/components/details/Hero";
import MainCast from "@/components/details/MainCast";
import Seasons from "@/components/details/Seasons";

export default function DetailsPage(){
  const { id, mediaType } = useParams();
  const DETAILS_URL = `https://api.themoviedb.org/3/${mediaType}/${id}?language=es-ES&append_to_response=credits,videos,episode_groups`;
  const { data } = useFetch<DetailsMovieType | DetailsSeriesType>(DETAILS_URL);
  
  if(!data) return null 
  if(mediaType !== 'movie' && mediaType !== 'tv') return
  return(
    <main className="max-w-360 w-[95%] m-auto mb-20  ">
      <Hero details={data}  media={mediaType}/>
      <MainCast cast={data.credits.cast}/>
      {mediaType === 'tv' && <Seasons seasons={(data as DetailsSeriesType).seasons } id={id || ''}/>}
    </main> 
  )
}