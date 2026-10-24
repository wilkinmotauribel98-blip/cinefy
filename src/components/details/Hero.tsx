import { type DetailsMovieType, type DetailsSeriesType  } from "@/types/Details"
import { publicUrl } from "@/utils/publicURL"
type DetailsProps ={
  details: DetailsMovieType | DetailsSeriesType,
  title: string
}

const checkIsSerie = (media: DetailsProps['details']): media is DetailsSeriesType=>{
  return (media as DetailsSeriesType).seasons !== undefined
}

export default function Hero({ details, title }: DetailsProps){
  const dot = <span className="w-1 h-1 rounded-full bg-zinc-500"></span>

  
  if(checkIsSerie(details)) return(
    <section className="flex gap-10 mt-10">
      <div className="rounded-2xl overflow-hidden  ">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${details?.poster_path ?? details.backdrop_path}`} 
          alt="" 
          className="aspect-5/7 "
          />
      </div>
      <div className="f">
        <h1 className="text-3xl font-bold text-white ">{title.replace(/-/g,' ')}</h1>
        <span className="text-zinc-500 flex gap-1.5 text-sm">
          {details.name !== title && <p className="flex items-center gap-1.5">{details.name} {dot} </p> }
          <data value={String(details.first_air_date)}>{String(details.first_air_date)}</data>
        </span>

        <div className="mt-6 flex gap-3 items-center ">
          <span className="rounded-full  flex gap-1 text-amber-300 bg-amber-800/40 py-1 px-4 w-fit items-center"> 
          <svg className="w-5 h-5 text-amber-300">
            <use href={`${publicUrl('/icons.svg#icon-star')}`}></use>
          </svg>
          {details.vote_average}
        </span>
        <p className="text-zinc-400">{details.seasons.length} Seasons </p>
          {dot}
        <span className="text-zinc-400">Serie</span>
        </div>

        <div className="text-white flex gap-2 mt-3">
          {details.genres.slice(0,3).map(e => <span className="bg-button/60 rounded-full py-1 px-3 ">{e.name}</span>)}
          {details.status == 'Ended' ? <span className="bg-emerald-700/50 text-emerald-400 font-semibold rounded-full py-1 px-3">{details.status}</span> : <span className="bg-red-400 rounded-full py-1 px-3 text-red-400 font-semibold"></span>}
        </div>

        <div className="w-7/10 mt-5">
          <span className="text-2xl text-white font-semibold">Sinopsis</span>
          <p className="text-zinc-400 mt-3 max-w-200">{details.overview}</p>
        </div>

        <div className="flex gap-4 mt-9 ">
          <button className="bg-button text-white font-semibold rounded-full py-3 px-10">Add to favorites</button>
          <button className="border-2 border-gray-700  text-white font-semibold rounded-full py-3 px-10">Watch trailer</button>
        </div>

        <table className="gap-5 bg-secondary border rounded-xl mt-7 py-4">
          <thead className="py-4">
            <tr>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">Creator</th>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">Producer</th>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">Episodes</th>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-7 pb-5 text-white">{details.created_by[0].name}</th>
              <th className="px-7 pb-5 text-white" >{details.production_companies[0].name}</th>
              <th className="px-7 pb-5 text-white">{details.number_of_episodes}</th>
              <th className="px-7 pb-5 text-white">{details.status}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
  
}