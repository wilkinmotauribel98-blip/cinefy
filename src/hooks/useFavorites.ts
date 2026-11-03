import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { FavoritesState } from "@/types";



export const useFavorites = create<FavoritesState>()(
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