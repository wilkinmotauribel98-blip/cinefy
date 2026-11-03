export type MediaType = "movie" | "tv" | "person"

export interface Genre {
  id: number
  name: string
}

export interface Network {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface Person {
  id: number
  name: string
  original_name: string
  profile_path: string | null
  adult: boolean
  gender: number
  popularity: number
  known_for_department: string
}

export interface CastMember extends Person {
  character?: string
  cast_id?: number
  order?: number
  credit_id: string
}

export interface CrewMember extends Person {
  department?: string
  job?: string
  credit_id: string
}

export interface Credits {
  cast: CastMember[]
  crew: CrewMember[]
}

export interface MediaDetailsBase {
  id: number
  adult: boolean
  backdrop_path: string | null
  poster_path: string | null
  overview: string
  genres: Genre[]
  homepage: string | null
  original_language: string
  popularity: number
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string | null
  vote_average: number
  vote_count: number
  credits: Credits
}
