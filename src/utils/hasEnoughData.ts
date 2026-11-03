import type { MediaResult } from "@/types";

export function hasEnoughData(r: MediaResult): boolean {
  const date = r.media_type === "movie" ? r.release_date : r.first_air_date;

  return (
    Boolean(r.poster_path) && 
    Boolean(date) &&          
    r.vote_average > 0     
  );
}