import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type SavedQuery = {
  savedQuery: string | null
  setSavedQuery: (query:string) => void,
  isQuerySaved: boolean
}

export const useSavedQuery = create<SavedQuery>()(
  persist(
    (set) => ({
      savedQuery: null,
      setSavedQuery: (query) => set({ savedQuery: query, isQuerySaved: true }),
      isQuerySaved: false
    }),
    {
      name: 'saved-query-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)