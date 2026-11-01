import { type MediaType } from "@/types/types"
import { Link } from "react-router-dom"
import { optimizedImg } from "@/utils/optimizedImg"
import { publicUrl } from "@/utils/publicURL"
import { useFavorites } from "@/hooks/useFavorites"

export interface ResultCardProp {
  image: string | null,
  title: string,
  firstAirDate?: string,
  id: number,
  isLazy: boolean,
  mediaType: MediaType,
  rating: number

}


export default function ResultCard( { image, title, firstAirDate, id, isLazy, mediaType, rating } : ResultCardProp){
  const { isFavorite, setFavorites } = useFavorites()

  const f = {
    image: image,
    title: title,
    firstAirDate: firstAirDate,
    id: id,
    isLazy: isLazy,
    mediaType: mediaType,
    rating: rating
  }
  if(!image) return
  return(
<article className="relative rounded-2xl bg-secondary overflow-hidden">
    <button
        onClick={()=> setFavorites(f)}
        className="z-70 absolute top-3 right-2 cursor-pointer "
      >
        <svg className="w-10 h-10">
          <use href={publicUrl(`/icons.svg#${isFavorite(id) ? 'heart-icon' : 'icon-void-heart'}`)}></use>
        </svg>
      </button>


    <Link 
      to={`/details/${mediaType}/${id}/${title?.replace(/\s/g, '-')}`}
      className="  "
    >
      <div className="rounded-2xl overflow-hidden" >
        <img src={optimizedImg(`https://image.tmdb.org/t/p/w500/${image}`, 420, 620)}
        alt={`Poster of ${title}`}
        loading={isLazy ? 'lazy' : 'eager'}
        className="aspect-5/7 h-full"
        />
      </div>
      <div className="py-3 pl-4">
        <h3 className="text-white font-semibold mb-1 text-2x line-clamp-1">{title}</h3>
        <span className="text-zinc-400 flex gap-2 items-center text-lg capitalize">
          {firstAirDate?.replace(/-.*/, '')}
          <span className="w-1 h-1 bg-zinc-400 rounded-full"></span>
          {mediaType}
        </span>
      </div>
        <span className="absolute left-2 bottom-22 items-center flex gap-1 rounded-2xl px-3 py-1 bg-primary text-amber-300">
          <svg className="w-5 h-5">
            <use href={publicUrl('/icons.svg#icon-star')}></use>
          </svg>
          {rating?.toFixed(1)}
        </span>
      </Link>
    </article>
    
  )
}