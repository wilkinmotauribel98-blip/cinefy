import type { MediaDetailsBase } from "./common"

export interface BelongsToCollection {
  id: number
  name: string
  poster_path: string | null
  backdrop_path: string | null
}

export interface MovieDetails extends MediaDetailsBase {
  title: string
  original_title: string
  release_date: string
  runtime: number | null
  budget: number
  revenue: number
  imdb_id: string
  video: boolean
  belongs_to_collection: BelongsToCollection | null
  origin_country: string[]
}
