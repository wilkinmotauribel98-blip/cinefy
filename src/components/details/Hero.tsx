import type { Favorite, HeroView, MovieDetails, SeriesDetails } from "@/types"
import { publicUrl } from "@/utils/publicURL"
import { useMemo } from "react"
import { Link } from "react-router-dom"
import { useFavorites } from "@/hooks/useFavorites"



type DetailsProps ={
  details: MovieDetails | SeriesDetails,
  media: 'movie' | 'tv'
}


function Button({favorite}:{favorite:Favorite}){
  const { setFavorites, isFavorite } = useFavorites()
  return(
    <button 
        className={`${isFavorite(favorite.id) ? 'bg-red-500' : 'bg-button'} cursor-pointer text-white font-semibold rounded-full py-3 px-10`}
        onClick={()=>setFavorites(favorite)}
     >{isFavorite(favorite.id) ? 'Remove of favorites' : 'Add to favorites'}</button>
  )
}


export default function Hero({ details, media }: DetailsProps){
  const heroInfo = useMemo<HeroView>(()=>{
    const MovieDetails = details as MovieDetails;
    const SeriesDetails = details as SeriesDetails;

    if(media === 'movie'){
      return {
        title: MovieDetails.title,
        image: MovieDetails.poster_path ?? MovieDetails.backdrop_path,
        originalTitle : MovieDetails?.original_title,
        year: String(MovieDetails.release_date),
        synopsis: MovieDetails.overview,
        runtime: MovieDetails.runtime ?? undefined,
        producer: MovieDetails.production_companies[0].name,
        average:  Number(MovieDetails.vote_average.toFixed(2)),
        genres: MovieDetails.genres,
        status: MovieDetails.status,
        languages: MovieDetails.spoken_languages.map(e=> e.english_name).join(', '),
        tabTitle2: 'Debut',
        tabTitle3: 'Languajes'
      }
    }

    return {
      title: SeriesDetails.name || SeriesDetails.original_name,
      image: SeriesDetails.poster_path ?? SeriesDetails.backdrop_path,
      originalTitle : SeriesDetails?.original_name,
      year: String(SeriesDetails.first_air_date),
      synopsis: SeriesDetails.overview,
      episodes: SeriesDetails.number_of_episodes,
      producer: SeriesDetails?.production_companies[0]?.name,
      creator: SeriesDetails?.created_by[0]?.name,
      average: Number(SeriesDetails.vote_average.toFixed(1)),
      genres: SeriesDetails.genres,
      status: SeriesDetails.status,
      seasons: SeriesDetails.seasons.length,
      tabTitle2: 'Producer',
      tabTitle3: 'Episodes',
    }
  }, [details, media])
  const dot = <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
  const favorite:Favorite = {
    title: heroInfo.title,
    image: heroInfo.image,
    id: details.id,
    mediaType: media,
    rating: heroInfo.average,
    firstAirDate: heroInfo.year
  }
  return(
    <>
      <Link 
      to={'/'}
      >
      <button className="flex gap-2 text-zinc-400 my-4 -ml-3 cursor-pointer">
        <svg className="w-6 h-6 text-white">
          <use href={publicUrl('/icons.svg#icon-arrow-left')}></use>
        </svg>
          Back to results
      </button>
      </Link>

    <section className="flex gap-10  flex-col items-center w-full   lg:items-stretch lg:flex-row">
      <div className="rounded-2xl overflow-hidden  lg:w-3/10  xl:w-3.5/10 max-w-100 h-fit">
        <img 
          src={`https://image.tmdb.org/t/p/w500/${heroInfo?.image}`} 
          alt="" 
          className="aspect-5/7 lg:aspect-5/8  "
          />
      </div>
      <div className="lg:w-7/10 w-full">
        <h1 className="text-3xl font-bold text-white ">{heroInfo?.title.replace(/-/g,' ')}</h1>
        <span className="text-zinc-500 flex gap-1.5 text-sm">
          {heroInfo?.title !== heroInfo?.originalTitle && <p className="flex items-center gap-1.5">{heroInfo?.originalTitle} {dot} </p> }
          <data value={heroInfo?.year}>{heroInfo?.year}</data>
        </span>

        <div className="mt-6 flex gap-3 items-center ">
          <span className="rounded-full  flex gap-1 text-amber-300 bg-amber-800/40 py-1 px-4 w-fit items-center"> 
          <svg className="w-5 h-5 text-amber-300">
            <use href={publicUrl('/icons.svg#icon-star')}></use>
          </svg>
          {heroInfo?.average}
        </span>
        <p className="text-zinc-400">
          {heroInfo?.runtime !== undefined ? (heroInfo?.runtime / 60).toFixed(2) + ' min' : heroInfo?.seasons  + ' Seasons' } 
        </p>
          {dot}
        <span className="text-zinc-400">{heroInfo?.runtime !== undefined ? ' Movie' : ' Serie'}</span>
        </div>

        <div className="text-white flex gap-2 mt-3">
          {heroInfo?.genres.slice(0,2).map(e => <span key={e.id} className="bg-button/60 rounded-full py-2 px-2 text-sm font-semibold ">{e.name}</span>)}

          {heroInfo?.status == 'Ended' ? <span className="bg-emerald-700/50 text-emerald-400 font-semibold rounded-full py-1 px-3">{heroInfo.status}</span> : <span className="bg-red-400/30 rounded-full py-1 px-3 text-red-600 font-semibold">{heroInfo?.status}</span>}
        </div>

        <div className=" mt-5">
          <span className="text-2xl text-white font-semibold ">Sinopsis</span>
          <p className="text-zinc-400 mt-3 max-w-220 lg:max-w-200  xl:max-w-180">{heroInfo?.synopsis}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full ">
          <Button favorite={favorite}/>
          <button className="border-2 border-gray-700  text-white font-semibold rounded-full py-3 px-10">Watch trailer</button>
        </div>

        <table className="gap-5 bg-secondary hidden lg:block border rounded-xl  w-fit mt-7 py-4">
          <thead className="py-4">
            <tr>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">{heroInfo?.tabTitle2}</th>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">{heroInfo?.tabTitle3}</th>
              <th scope="col" className="pt-4 text-zinc-400 text-sm font-light">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="px-15 pb-5 text-white" >{media === 'movie' ? heroInfo?.year : heroInfo?.producer}</th>
              <th className="px-15 pb-5 text-white">{heroInfo?.episodes || heroInfo?.languages}</th>
              <th className="px-15 pb-5 text-white">{heroInfo?.status}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  
    </>
  )
  
}