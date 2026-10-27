import { useParams } from "react-router-dom"
import { useFetch } from "@/hooks/useFetch";
import { type DetailsMovieType, type DetailsSeriesType  } from "@/types/Details";
import Hero from "@/components/details/Hero";
import MainCast from "@/components/details/MainCast";
import Seasons from "@/components/details/Seasons";
import DetailsSkeleton from "@/components/details/DetailsSkeleton";
import ErrorState from "@/components/ui/ErrorState";

export default function DetailsPage(){
  const { id, mediaType } = useParams();
  const DETAILS_URL = `https://api.themoviedb.org/3/${mediaType}/${id}?language=es-ES&append_to_response=credits,videos,episode_groups`;
  const { data, loading, error, retry } = useFetch<DetailsMovieType | DetailsSeriesType>(DETAILS_URL);

  if(mediaType !== 'movie' && mediaType !== 'tv') return null
  if(!id) return null

  if(loading) {
    return(
      <main className="max-w-360 w-[95%] m-auto mb-20" aria-busy="true">
        <DetailsSkeleton mediaType={mediaType}/>
      </main>
    )
  }

  if(error || !data) return(
    <ErrorState
      title="We were unable to load the details"
      message="Check your connection and try again."
      retry={retry}
    />
  )
  return(
    <main className="max-w-360 w-[95%] m-auto mb-20  ">
      <Hero details={data}  media={mediaType}/>
      <MainCast cast={data.credits.cast}/>
      {mediaType === 'tv' && <Seasons seasons={(data as DetailsSeriesType).seasons } id={id || ''}/>}
    </main> 
  )
}