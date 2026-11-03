import Skeleton from "./Skeleton"
import ResultCardSkeleton from "@/components/home/ResultCardSkeleton"

const cardPlaceholders = Array.from({ length: 8 }, (_, index) => index)

export default function PageFallback() {
  return (
    <main aria-busy="true" className="max-w-400 m-auto px-3 sm:px-12 mt-10">
      <span role="status" className="sr-only">
        Loading…
      </span>

      <div aria-hidden="true" className="flex flex-col gap-3">
        <Skeleton className="h-10 w-64 max-w-full" />
        <Skeleton className="h-6 w-80 max-w-full" />
      </div>

      <div
        aria-hidden="true"
        className="grid px-3 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-8 gap-4 md:gap-7"
      >
        {cardPlaceholders.map((placeholder) => (
          <ResultCardSkeleton key={placeholder} />
        ))}
      </div>
    </main>
  )
}
