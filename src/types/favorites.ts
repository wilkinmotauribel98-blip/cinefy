import type { MediaType } from "./tmdb/common"

export interface Favorite {
  id: number
  title: string
  image: string | null
  mediaType: MediaType
  rating: number
  firstAirDate?: string
}

export interface ResultCardProps extends Favorite {
  isLazy?: boolean
  fetchPriority?: "low" | "high"
}

export interface FavoritesState {
  favorites: Record<number, Favorite>
  total: number
  setFavorites: (favorite: Favorite) => void
  deleteFavorites: (id: number) => void
  isFavorite: (id: number) => boolean
}
