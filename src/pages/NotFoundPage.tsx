import notFoundImg from "@/assets/404.svg"
import { Link } from "react-router-dom"


export default function NotFoundPage(){
  return(
   <>
     <main className="flex items-center gap-2 flex-col justify-center h-dvh w-19/20 m-auto ">
      <img src={notFoundImg} alt="" />
      <h1 className='text-3xl font-semibold text-white'>This scene doesn't exist</h1>
      <p className='text-zinc-400 text-center' >The page you are looking for is no longer available or has been moved.</p>
      <div className='flex flex-col md:flex-row gap-3 m-7 w-full max-w-100' >
        <Link to={'/'}>
        <button className="py-3 cursor-pointer w-full px-7 text-white bg-button rounded-3xl">
          Back to Home
        </button>
        </Link>
        <Link to={'/favorites'}>
        <button className="py-3 cursor-pointer  w-full px-7 text-white border-2 border-gray-600 rounded-3xl">
          Go to favorites
        </button>
        </Link>
      </div>
    </main> 

    <footer className="items-center justify-center flex gap-2 text-zinc-400 mb-7">
        <p>Error 404</p>
        <span className="bg-zinc-400 w-1 h-1 rounded-full"></span>
        <p>Route not found</p>
    </footer>
   </>
  )
}