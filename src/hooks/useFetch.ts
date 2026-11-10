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
    const token = (import.meta.env.VITE_TMDB_API_KEY ?? '')
      .trim()
      .replace(/^['"]|['"]$/g, '');

    fetch(url, {
      signal: abortController.signal,
      headers: token ? { Authorization: `Bearer ${token}` } : {}
     })
    .then((res)=>{
      if(!res.ok) throw new Error(res.status === 401 ? 'HTTP 401 (revisa VITE_TMDB_API_KEY)' : `HTTP ${res.status}`)
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
