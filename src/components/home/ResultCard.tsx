import { type Result } from "@/types/types"
import { Link } from "react-router-dom"
type ResultCardProps = {
  result: Result
}
export default function ResultCard( { result }: ResultCardProps){
  const {
    poster_path,
    original_title,
    backdrop_path,
    release_date,
    media_type,
    first_air_date,
    title,
    name 
  } = result

  if(backdrop_path == null && poster_path == null) return
  
  
  return(
    <Link 
      to={''}
    >
    <article className="rounded-2xl bg-secondary overflow-hidden ">
      <div className="rounded-2xl overflow-hidden" >
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path || backdrop_path }`} 
        alt={`Poster of ${title || name || original_title}`}
        loading="lazy"
        className="aspect-5/7 h-full"
        />
      </div>
      <div className="py-3 pl-4">
        <h3 className="text-white font-semibold mb-1 text-2x line-clamp-1">{ title || name || original_title}</h3>
        <span className="text-zinc-400 flex gap-2 items-center text-lg capitalize">
          {release_date?.replace(/-.*/, '') || first_air_date?.replace(/-.*/, '') }
          <span className="w-1 h-1 bg-zinc-400 rounded-full \e "></span>
          {media_type}
        </span>
      </div>
    </article>
    </Link>
  )
}