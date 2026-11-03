import type { Genre } from "./tmdb/common"

export interface HeroView {
  title: string
  image: string | null
  originalTitle?: string
  year: string
  synopsis: string
  genres: Genre[]
  average: number
  status?: string
  runtime?: number
  seasons?: number
  episodes?: number
  producer?: string
  creator?: string
  languages?: string
  tabTitle2: string
  tabTitle3: string
}
