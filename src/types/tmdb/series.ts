import type { CastMember, CrewMember, MediaDetailsBase, Network } from "./common"

export interface CreatedBy {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}

export interface Season {
  air_date: string | null
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}

export interface Episode {
  id: number
  name: string
  overview: string
  air_date: string | null
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string | null
  vote_average: number
  vote_count: number
  crew: CrewMember[]
  guest_stars: CastMember[]
}

export interface SeriesDetails extends MediaDetailsBase {
  name: string
  original_name: string
  first_air_date: string
  last_air_date: string | null
  created_by: CreatedBy[]
  episode_run_time: number[]
  in_production: boolean
  languages: string[]
  last_episode_to_air: Episode | null
  next_episode_to_air: Episode | null
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  seasons: Season[]
  type: string
  origin_country: string[]
}

export interface SeasonDetails {
  _id: string
  air_date: string | null
  episodes: Episode[]
  name: string
  networks: Network[]
  overview: string
  id: number
  poster_path: string | null
  season_number: number
  vote_average: number
}
