import { optimizedImg } from "@/utils/optimizedImg"
import { publicUrl } from "@/utils/publicURL"
interface EpisodeProps {
  number: number,
  image: string,
  title: string,
  rating: number,
  runtime: number,
  date: string,
  isLazy: boolean
}

export default function Episode({ number, image, title, rating, runtime, date, isLazy  }:EpisodeProps) {
  return(
    <article className="flex w-full gap-2  bg-secondary max-h-30 rounded-2xl items-center p-2 ">
      <data 
        value={number}
        className="text-gray-400 px-2"
        >{number}</data>
      <div className="w-fit">
        <img
          loading={isLazy ? 'lazy' : 'eager'} 
          className="rounded-2xl object-center max-h-30  posi "
          src={optimizedImg(`https://image.tmdb.org/t/p/w500/${image}`, 520, 420)} 
          alt="" />
      </div>
      <div className="flex w-full">
        <div>
          <h3 className="text-white text-lg font-sans line-clamp-1">{title}</h3>  
          <div className="text-zinc-400 flex gap-1">
            <span className="flex gap-1 items-center">
              {date} 
              <div className="bg-zinc-400 w-1 h-1 rounded-full"></div>
            </span>
            <span>{runtime} min</span>
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