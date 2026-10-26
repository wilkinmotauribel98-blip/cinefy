import { type Credits } from "@/types/Details"
import MainCastCard from "../ui/MainCastCard"
interface MainCastProps {
  cast: Credits['cast'],
}


export default function MainCast({ cast }:MainCastProps){

  return(
    <section className="mt-6 ml-3">
      <h2 className="text-white text-2xl font-semibold">Main Cast</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-7 mt-4">
        {cast.slice(0,10).map(e => <MainCastCard key={e.id} image={e.profile_path || ''} name={e.name || ''} />)}
      </div>
    </section>
  )
}