import { useEffect, } from "react"
import { useLocation, Link } from "react-router-dom"
export default function Header(){
  const location = useLocation()
  useEffect(()=>{
    scrollTo(0,0)
  }, [location.search, location.pathname])

  return(
    <header className="bg-header w-full m-auto flex justify-between px-5 py-5 ">
      <div>
        <Link
          to={'/'}
          className="text-3xl font-bold text-white"
        >
          CINEFY
        </Link>
      </div>
      <div className="flex gap-3">
        <span className="text-zinc-300 text-xl ">Favoritos</span>
        <span className="rounded-full w-6 h-6 bg-red-400 text-white text-center">3</span>
      </div>
    </header>
  )
}