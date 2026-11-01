import { useFavorites } from "@/hooks/useFavorites"
import WithoutFavorites from "@/components/favorites/WithoutFavorites"
import FavoritesContent from "@/components/favorites/FavoritesContent"
export default function FavoritesPage() {
  const { total } = useFavorites()
  return(
    <main className='w-19/20 m-auto'>
      <h1 className="text-4xl font-bold text-white mt-5">My favorites</h1>
      <p className="mt-1 text-zinc-500 ">{total} favorites movies and TV shows.</p>
      
      {total == 0 && <WithoutFavorites />}
      {total > 0 && <FavoritesContent /> }


    </main>)
}
