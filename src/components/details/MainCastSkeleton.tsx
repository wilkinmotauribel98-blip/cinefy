import Skeleton from "@/components/ui/Skeleton"

const castPlaceholders = Array.from({ length: 10 }, (_, index) => index)

export default function MainCastSkeleton() {
  return (
    <section aria-hidden="true" className="mt-6 ml-3">
      <Skeleton className="h-8 w-40" />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(165px,1fr))] gap-7 mt-4">
        {castPlaceholders.map((placeholder) => (
          <article key={placeholder} className="flex gap-2 items-center">
            <Skeleton className="w-13 h-13 shrink-0 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </article>
        ))}
      </div>
    </section>
  )
}
