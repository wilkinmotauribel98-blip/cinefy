export default function Header(){
  return(
    <header className="bg-header w-full m-auto flex justify-between px-10 py-5 ">
      <div>
        <span className="text-3xl font-bold text-white">CINEFY</span>
      </div>
      <div className="flex gap-3">
        <span className="text-zinc-300 text-xl ">Favoritos</span>
        <span className="rounded-full w-6 h-6 bg-red-400 text-white text-center">3</span>
      </div>
    </header>
  )
}