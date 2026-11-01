import { useEffect, } from "react"
import { useLocation, Link } from "react-router-dom"
import { useFavorites } from "@/hooks/useFavorites"
import cinefyLogo from '@/assets/cinefy-logo.svg'
export default function Header(){
  const { total } = useFavorites()
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
          <img src={cinefyLogo} alt="" />
        </Link>
      </div>

  <div className="flex gap-10">
    {location.pathname !== '/' && <Link 
      to={'/'}
      className="text-zinc-400 text-xl"
    >
      Home
    </Link> }
    
    <Link to={'/favorites'}>
      <div className="flex gap-3 items-center">
        <span className="text-white text-xl ">Favorites</span>
        <span className="rounded-full w-6 h-6 bg-red-600 text-white text-center">{total}</span>
      </div>
      </Link>
    </div>
    
      
    </header>
  )
}