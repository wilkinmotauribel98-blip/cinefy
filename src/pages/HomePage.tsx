
import HomeContent from "@/components/home/HomeContent"
export default function HomePage(){
  return(
    <main className="max-w-400 m-auto px-3 sm:px-12 ">
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl text-white mt-10 font-bold">Find your next movie </h1>
        <p className="text-zinc-400 text-lg">Search by title, save your favorites, and keep exploring.</p>
      </div>
        <HomeContent />
    
      
    </main>
  )
}
