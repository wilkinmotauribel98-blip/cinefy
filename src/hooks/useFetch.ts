import { useEffect, useState } from "react";

type FetchState<T> = {
  key: string;
  data: T | null;
  error: Error | null;
}

export function useFetch<T>(url:string) {
  const [attempt, setAttempt] = useState(0);
  const key = `${attempt}:${url}`;
  const [state, setState] = useState<FetchState<T>>({
    key: '',
    data: null,
    error: null,
  });
  const loading = state.key !== key;

  useEffect(()=>{
    const abortController = new AbortController();

    fetch(url, {
      signal: abortController.signal,
      headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`}
     })
    .then((res)=>{
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json();
    })
    .then((d:T) => {
      if(!abortController.signal.aborted) {
        setState({ key, data: d, error: null })
      }
    })
    .catch((err)=>{
      if(!abortController.signal.aborted && err.name !== 'AbortError') {
        setState({ key, data: null, error: err })
      }
    })

    return ()=> abortController.abort();

  }, [key, url])

  return {
    error: loading ? null : state.error,
    data: loading ? null : state.data,
    loading,
    retry: ()=> setAttempt(n => n + 1),
  };
}
