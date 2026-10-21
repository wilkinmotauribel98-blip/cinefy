import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import { type SearchResponse } from "@/types/types";


export type ResultsType = {
  searchResponse: SearchResponse | undefined,
  setSearchResponse: Dispatch<SetStateAction<SearchResponse | undefined>>,
}

export const SearchContext = createContext<ResultsType | null>(null);

type SearchContextProviderProps = {
  children: ReactNode
}


export function SearchContextProvider({children}:SearchContextProviderProps ){
  const [searchResponse, setSearchResponse] = useState<SearchResponse>();


  return(
    <SearchContext.Provider
      value={{searchResponse, setSearchResponse}}
    >
      {children}
    </SearchContext.Provider>
  )
}

