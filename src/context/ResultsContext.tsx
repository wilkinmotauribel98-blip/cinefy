import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";
import {  type Result } from "@/types/types";


export type ResultsType = {
  results: Result[],
  setResults: Dispatch<SetStateAction<Result[]>>
}

export const ResultsContext = createContext<ResultsType | null>(null);


type ResultsContextProviderProps = {
  children: ReactNode
}

export function ResultsContextProvider({children}:ResultsContextProviderProps ){
  const [results, setResults] = useState<Result[]>([])

  return(
    <ResultsContext.Provider
      value={{results, setResults}}
    >
      {children}
    </ResultsContext.Provider>
  )
}

