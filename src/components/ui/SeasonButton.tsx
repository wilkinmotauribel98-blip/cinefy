import type { Dispatch, SetStateAction } from "react"

type SeasonButtonProps = {
  seasonNumber:number,
  active: boolean
  setCurrentSeason: Dispatch<SetStateAction<number>>
}



export default function SeasonButton({ seasonNumber, active, setCurrentSeason }: SeasonButtonProps){
  return(
    <button 
      className={ `${active ? 'bg-button' : 'bg-secondary'} cursor-pointer py-2 rounded-full px-4 shrink-0 text-white `}
      onClick={()=> setCurrentSeason(seasonNumber)}
      >
        {seasonNumber === 0 ? 'OVAS' :  'Season ' + seasonNumber}
    </button>
  )
}