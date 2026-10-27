import { optimizedImg } from "@/utils/optimizedImg"


interface MainCastCardProps {
  image: string,
  name: string,

}


export default function MainCastCard({image, name}: MainCastCardProps){

  
  return(
    <article className="flex gap-2 items-center">
      <div className="rounded-full ">
        <img 
          src={optimizedImg(`https://image.tmdb.org/t/p/w500/${image}`, 120, 120)} 
          alt={`Photo of ${name}`}
          className="rounded-full w-13 h-13 text-amber-50" />
      </div>
      <h3 className="text-zinc-400">{name}</h3>
    </article>
  )
}