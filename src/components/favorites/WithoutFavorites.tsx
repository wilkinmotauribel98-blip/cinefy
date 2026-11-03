import { publicUrl } from "@/utils/publicURL"
import { Link } from "react-router-dom"
export default function WithoutFavorites() {

  return (
    <section 
    className="border mt-4   border-zinc-400 rounded-2xl h-100 border-dashed  flex flex-col items-center justify-center">
      <svg className="text-zinc-400" width="100" height="100"  role="img" aria-label="Heart">
        <use href={publicUrl("/icons.svg#icon-heart")}></use>
      </svg>
      <p className="text-white text-2xl md:text-3xl ">You don't have any favorites yet.</p>
      <p className="text-zinc-400 ">Tap the heart on any movie or tv show to save it here</p>
      <Link 
        to={'/'}
      >
        <button className="text-white rounded-3xl py-3 px-7 text-lg mt-4 cursor-pointer bg-button ">
        Explore movies and TV shows.
      </button>
      </Link>
      

    </section>
  )}