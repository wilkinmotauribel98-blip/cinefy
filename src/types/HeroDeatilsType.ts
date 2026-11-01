
import { type DetailsMovieType } from "./Details"

export type HeroType = {
  title: string,
  image: string,
  originalTitle: string,
  year: string,
  seasons?: number,
  sinopsis: string,
  creator?: string,
  producer:string,
  episodes?:number,
  status?: string,
  runtime?: number,
  average: number,
  director?: string,
  genres: DetailsMovieType['genres'],
  tabTitle2: string,
  tabTitle3: string,
  laguanjes?: string
}
