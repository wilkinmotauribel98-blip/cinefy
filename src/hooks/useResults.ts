import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
export function useResults(){
    const ctx = useContext(SearchContext);
    if (!ctx) throw new Error("useResults must be use in ResultsContextProvider");;
    return ctx
}