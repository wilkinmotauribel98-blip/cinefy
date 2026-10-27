import Skeleton from "@/components/ui/Skeleton"
import EpisodesSkeleton from "./EpisodesSkeleton"

const seasonPlaceholders = Array.from({ length: 5 }, (_, index) => index)

export default function SeasonsSkeleton() {
  return (
    <section aria-hidden="true" className="mt-7 pr-3">
      <Skeleton className="h-7 w-24" />

      <div className="flex gap-2 overflow-hidden py-2">
        {seasonPlaceholders.map((placeholder) => (
          <Skeleton
            key={placeholder}
            className="h-10 w-24 shrink-0 rounded-full"
          />
        ))}
      </div>

      <div className="h-dvh overflow-hidden">
        <EpisodesSkeleton />
      </div>
    </section>
  )
}
