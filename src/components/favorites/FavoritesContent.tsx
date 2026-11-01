import ResultCard from "../home/ResultCard"
import TagButton from "../ui/TagButton"
import { useFavorites } from "@/hooks/useFavorites"
import { useState, useMemo } from "react"




const favoritesTags = {
  LATEST : 'Latest',
  BEST_RATING : 'Best rating'
}

const date = (date:string) =>  { 
  const dateObj = new Date(date);
  return dateObj.getTime()
}

export default function FavoritesContent() {
  const { LATEST, BEST_RATING } = favoritesTags
  const { favorites } = useFavorites()
  const [active, setActive] = useState<string>(LATEST);
  const filtereds = useMemo(()=>{
    const f = Object.values(favorites);
    switch(active){
      case BEST_RATING: return f.sort((a, b)=> a.rating > b.rating ? -1 : 1)
      break;
      case LATEST: return f.sort((a, b)=> date(a.firstAirDate || '') > date(b.firstAirDate || '') ? -1 : 1)
    }
  }, [active, favorites])
  return(
    <section className="min-h-dvh mb-20">
     <div className="flex gap-2 mt-3">
      <TagButton title={LATEST} isActive={active === LATEST} setActive={setActive}/>
      <TagButton title={BEST_RATING} isActive={active === BEST_RATING} setActive={setActive}/>
      </div>
    <div 
    className="grid px-3  grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-5 gap-4 md:gap-7">
        {filtereds?.length && filtereds.map((e)=> <
            ResultCard 
            image={e.image}
            title={e.title}
            id={e.id}
            isLazy={e.isLazy}
            key={e.id}
            mediaType={e.mediaType}
            firstAirDate={e.firstAirDate}
            rating={e.rating}
          />)}

      </div>
      
    </section>
  )
}