export interface SearchResponse {
    page:          number;
    results:       Result[];
    total_pages:   number;
    total_results: number;
}


export interface Result {
    adult:             boolean;
    backdrop_path:     null | string;
    id:                number;
    title?:            string;
    original_language: OriginalLanguage;
    original_title?:   string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    release_date?:     string;
    video?:            boolean;
    vote_average:      number;
    vote_count:        number;
    name?:             string;
    original_name?:    string;
    first_air_date?:   string;
    origin_country?:   string[];
}

export type MediaType = "movie" | "tv" | 'person';

export type OriginalLanguage = "en" | "ja";
