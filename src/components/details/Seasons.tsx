import { type DetailsSeriesType } from "@/types/Details"
import SeasonButton from "../ui/SeasonButton"
import { useState } from "react"

interface SeasonsProps{
  seasons: DetailsSeriesType['seasons'],
  id: string
}

export default function Seasons({ seasons }: SeasonsProps){
  const [ currentSeason, setCurrentSeason ] = useState<number>(1);
  

  return(
    <section className=" mt-7">
      <h2 className="text-white text-xl font-semibold ">Seasons</h2>
      <div className="flex gap-2 overflow-x-scroll h-fit  scrollbar-none py-2">
      {seasons.map(s => <SeasonButton 
      key={s.season_number + 1}
      seasonNumber={s.season_number} 
      active={s.season_number + 1 === currentSeason}
      setCurrentSeason={setCurrentSeason}
      />)}
      </div>

    </section>
  )
}