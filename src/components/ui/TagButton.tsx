import { type Dispatch, type SetStateAction } from "react";
import { Tags } from "../home/tags";


export type Action = | {type: 'Movies'} | {type: 'Series'} | {type: 'Favorites'} | {type: 'All'}
interface TagButtonProps {
  title: (typeof Tags)[keyof typeof Tags]
  isActive:boolean
  setActive: Dispatch<SetStateAction<(typeof Tags)[keyof typeof Tags]>>
}


export default function TagButton({ title, isActive, setActive}: TagButtonProps){
  const onActive = 'bg-button text-white'
  return(
    <button 
    aria-pressed={isActive}
    className={`rounded-full text-white py-2 px-6 cursor-pointer font-semibold ${isActive ? onActive : 'bg-secondary text-zinc-400'}`}
    onClick={()=> setActive(title)}
    >{title}
    </button>
  )
}