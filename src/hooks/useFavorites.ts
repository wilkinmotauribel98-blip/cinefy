import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type ResultCardProp } from "@/components/home/ResultCard";
interface Favorites  {
  favorites: {[id:number]: ResultCardProp},
  setFavorites: (movie: ResultCardProp) => void,
  deleteFavorites: (id: number) => void,
  isFavorite: (id:number) => boolean,
  total: number
}



export const useFavorites = create<Favorites>()(
  persist(
    (set, get) => ({
      favorites: {},
      setFavorites: (movie) => {
        const f = get().favorites
        if(f[movie.id]) get().deleteFavorites(movie.id);
        else set({favorites: {...get().favorites, [movie.id]:movie}, total: get().total + 1})
      },
      deleteFavorites: (id) => {
        const a = { ...get().favorites };
        delete a[id];
        set({favorites: a, total: get().total - 1})
      },
      isFavorite: (id)=>  {
        const a = get().favorites;
        return a[id] !== undefined
      },
      total: 0,
      }
    ),
    {
    name: 'favorites-storage',
    storage: createJSONStorage(()=> localStorage)
  }
)
)