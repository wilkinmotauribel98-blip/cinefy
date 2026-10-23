interface TagButtonProps {
  title:string
  isActive:boolean
  setActive: (value: string) => void
}


export default function TagButton({ title, isActive, setActive }: TagButtonProps){
  const onActive = 'bg-button text-white'
  return(
    <button 
    aria-pressed={isActive}
    className={`rounded-full text-white py-2 px-6 cursor-pointer font-semibold ${isActive ? onActive : 'bg-secondary text-zinc-400'}`}
    onClick={()=>setActive(title)}
    >{title}
    </button>
  )
}