import type { MediaType } from "./common"

export interface MediaResult {
  adult: boolean
  backdrop_path: string | null
  id: number
  title?: string
  name?: string
  original_title?: string
  original_name?: string
  original_language: string
  overview: string
  poster_path: string | null
  media_type: MediaType
  genre_ids: number[]
  popularity: number
  release_date?: string
  first_air_date?: string
  video?: boolean
  vote_average: number
  vote_count: number
  origin_country?: string[]
}

export interface SearchResponse {
  page: number
  results: MediaResult[]
  total_pages: number
  total_results: number
}
