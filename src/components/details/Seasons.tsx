import type { SeriesDetails, SeasonDetails } from "@/types"
import { useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import SeasonButton from "../ui/SeasonButton"
import Episode from "./Episode"
import EpisodesSkeleton from "./EpisodesSkeleton"

interface SeasonsProps{
  seasons: SeriesDetails['seasons'],
  id: string
}

export default function Seasons({ seasons, id }: SeasonsProps){
  const [ currentSeason, setCurrentSeason ] = useState<number>(1);
  const SEASON_URL = `https://api.themoviedb.org/3/tv/${id}/season/${currentSeason}?language=en-US`
  const { data, loading, error, retry } = useFetch<SeasonDetails>(SEASON_URL)
  
  return(
    <section className="mt-7 pr-3 ">
      <h2 className="text-white text-xl font-semibold ">Seasons</h2>
      <div className="flex gap-2 overflow-x-scroll h-fit  scrollbar-none py-2">
      {seasons.map(s => <SeasonButton 
      key={s.season_number}
      seasonNumber={s.season_number} 
      active={s.season_number === currentSeason}
      setCurrentSeason={setCurrentSeason}
      />)}
      </div>

    <section
      className="flex flex-col gap-5 mt-3 h-dvh overflow-scroll scrollbar-none"
      aria-busy={loading}
    >
      {loading && (
        <>
          <span role="status" className="sr-only">Loading episodes…</span>
          <EpisodesSkeleton />
        </>
      )}

      {!loading && error && (
        <div role="alert" className="flex flex-col items-start gap-2">
          <p className="text-zinc-400">No pudimos cargar los episodios.</p>
          <button
            type="button"
            onClick={retry}
            className="bg-button text-white font-semibold rounded-full py-2 px-6"
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && data?.episodes.map((e, i) => <Episode
      key={e.episode_number}
      runtime={e.runtime}
      image={e.still_path}
      episodeTitle={e.name}
      rating={e.vote_average}
      number={e.episode_number}
      date={String(e.air_date)}
      isLazy={i > 7}
        />)}
    </section>

    </section>
  )
}