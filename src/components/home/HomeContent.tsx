import TagButton from "../ui/TagButton"
import { useState, useEffect } from "react"
const MOVIES = 'Movies';
const SERIES = 'Series';
const FAVORITES = 'Favorites';
const ALL = 'All';

export default function HomeContent(){
  const [active, setActive] = useState<string>(ALL);
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(()=>{
    const sizer = ()=> setSize(window.innerWidth);
    addEventListener('resize', sizer);
    return ()=> removeEventListener('resize', sizer)
  }, [])

  useEffect(()=>{
    size < 768 && active === FAVORITES && setActive(ALL) 
  }, [active, size])

  
  return(
    <section className="flex gap-3 mt-5 ">
      <TagButton title={ALL} isActive={active == ALL} setActive={setActive} />
      <TagButton title={MOVIES} isActive={active == MOVIES} setActive={setActive}/>
      <TagButton title={SERIES} isActive={active == SERIES} setActive={setActive}/>
      {size >= 768 && <TagButton title={FAVORITES} isActive={active == FAVORITES} setActive={setActive} />}
    </section>
  )
}