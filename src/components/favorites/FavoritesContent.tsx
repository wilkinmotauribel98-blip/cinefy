import ResultCard from "../home/ResultCard"
import TagButton from "../ui/TagButton"
import { useFavorites } from "@/hooks/useFavorites"
import { useState, useMemo } from "react"

const favoritesTags = {
  LATEST: 'Latest',
  BEST_RATING: 'Best rating',
} as const

type FavoriteTag = (typeof favoritesTags)[keyof typeof favoritesTags]

const timestamp = (date?: string) => {
  const time = date ? new Date(date).getTime() : NaN
  return Number.isNaN(time) ? 0 : time
}

export default function FavoritesContent() {
  const { favorites } = useFavorites()
  const [active, setActive] = useState<FavoriteTag>(favoritesTags.LATEST)

  const sortedFavorites = useMemo(() => {
    const items = Object.values(favorites)
    switch (active) {
      case favoritesTags.BEST_RATING:
        return items.sort((a, b) => b.rating - a.rating)
      case favoritesTags.LATEST:
      default:
        return items.sort((a, b) => timestamp(b.firstAirDate) - timestamp(a.firstAirDate))
    }
  }, [active, favorites])

  return(
    <section className="min-h-dvh mb-20">
     <div className="flex gap-2 mt-3">
      <TagButton title={favoritesTags.LATEST} isActive={active === favoritesTags.LATEST} setActive={setActive}/>
      <TagButton title={favoritesTags.BEST_RATING} isActive={active === favoritesTags.BEST_RATING} setActive={setActive}/>
      </div>
    <h2 className="sr-only">Saved titles</h2>
    <div 
    className="grid px-3  grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-5 gap-4 md:gap-7">
        {sortedFavorites.length > 0 && sortedFavorites.map((e, i)=> 
          <ResultCard 
            image={e.image}
            title={e.title}
            id={e.id}
            isLazy={i > 7}
            key={e.id}
            mediaType={e.mediaType}
            firstAirDate={e.firstAirDate}
            rating={e.rating}
            fetchPriority={i > 7 ? 'low' : 'high'}
          />)
          }

      </div>
      
    </section>
  )
}
