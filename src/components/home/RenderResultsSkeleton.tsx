import Skeleton from "@/components/ui/Skeleton"
import ResultCardSkeleton from "./ResultCardSkeleton"

const cardPlaceholders = Array.from({ length: 12 }, (_, index) => index)
const pagePlaceholders = Array.from({ length: 5 }, (_, index) => index)

export default function RenderResultsSkeleton() {
  return (
    <section aria-busy="true" className="mt-5">
      <span role="status" className="sr-only">
        Cargando resultados…
      </span>

      <div aria-hidden="true" className="flex justify-between">
        <Skeleton className="h-8 w-28" />
        <Skeleton className="h-7 w-44" />
      </div>

      <div
        aria-hidden="true"
        className="grid px-3 grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] mt-5 gap-4 md:gap-7"
      >
        {cardPlaceholders.map((placeholder) => (
          <ResultCardSkeleton key={placeholder} />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="flex gap-2 my-5 w-fit max-w-full m-auto overflow-hidden"
      >
        {pagePlaceholders.map((placeholder) => (
          <Skeleton key={placeholder} className="h-12 w-12 shrink-0 rounded-xl" />
        ))}
      </div>
    </section>
  )
}
