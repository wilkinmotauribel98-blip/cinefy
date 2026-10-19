import { useEffect, useState } from "react";

export function useFetch<T>(url:string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [attempt, setAttempt] = useState(0)
  useEffect(()=>{
    setLoading(true);
    const abortController = new AbortController();
    setError(null)
    fetch(url, { 
      signal: abortController.signal,
      headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`}
     })
    .then((res)=>{
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json();
    })
    .then((d:T) => setData(d))
    .catch((err)=>{
      if(err.name !== 'AbortError') setError(err)
    })
    .finally(() => { if (!abortController.signal.aborted) setLoading(false)} )

    return ()=> abortController.abort();

  }, [url, attempt])

  
  return { error, data, loading, retry: ()=> setAttempt(n => n + 1)};
}