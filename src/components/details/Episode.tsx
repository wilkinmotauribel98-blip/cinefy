import { optimizedImg } from "@/utils/optimizedImg"
import { publicUrl } from "@/utils/publicURL"
import { useParams } from "react-router-dom"
interface EpisodeProps {
  number: number,
  image: string | null,
  episodeTitle: string,
  rating: number,
  runtime: number | null,
  date: string,
  isLazy: boolean
}

export default function Episode({ number, image, episodeTitle, rating, runtime, date, isLazy }:EpisodeProps) {
  const { title } = useParams()
  return(
    <article className="flex w-full gap-2  bg-secondary max-h-30 rounded-2xl items-center p-2 ">
      <data 
        value={number}
        className="text-gray-400 px-2"
        >{number}</data>
      <div className="w-fit">
        <img
          loading={isLazy ? 'lazy' : 'eager'} 
          className="rounded-2xl object-right aspect-16/12 w-40 object-cover "
          src={image ? optimizedImg(`https://image.tmdb.org/t/p/w500/${image}`, 520, 420) : undefined} 
          alt={`Episode ${number} of ${title}`} />
      </div>
      <div className="flex w-full">
        <div>
          <h3 className="text-white text-lg font-sans line-clamp-1">{episodeTitle}</h3>  
          <div className="text-zinc-400 flex gap-1">
            {date && <span className="flex gap-1 items-center">
              {date} 
              <div className="bg-zinc-400 w-1 h-1 rounded-full"></div>
            </span>}
           {runtime && <span>{runtime} min</span>}
          </div>
        </div>

        <span className="w-fit ml-auto items-center flex text-amber-300">
          <svg className="w-5 h-5 text-amber-300">
            <use href={`${publicUrl('/icons.svg#icon-star')}`}></use>
          </svg>
          {rating}
        </span>

      </div>
    </article>
  )
  
}