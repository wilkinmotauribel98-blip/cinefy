import { type Dispatch, type SetStateAction } from "react";


export type Action = | {type: 'Movies'} | {type: 'Series'} | {type: 'Favorites'} | {type: 'All'}
interface TagButtonProps<T extends string> {
  title: NoInfer<T>
  isActive:boolean
  setActive: Dispatch<SetStateAction<T>>
}


export default function TagButton<T extends string>({ title, isActive, setActive}: TagButtonProps<T>){
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