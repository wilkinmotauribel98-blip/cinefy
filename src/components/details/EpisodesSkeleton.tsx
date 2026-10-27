import Skeleton from "@/components/ui/Skeleton"

type EpisodesSkeletonProps = {
  count?: number
}

const episodePlaceholders = (count: number) =>
  Array.from({ length: count }, (_, index) => index)

export default function EpisodesSkeleton({ count = 6 }: EpisodesSkeletonProps) {
  return (
    <div aria-hidden="true" className="flex flex-col gap-5 mt-3">
      {episodePlaceholders(count).map((placeholder) => (
        <article
          key={placeholder}
          className="flex w-full gap-2 bg-secondary max-h-30 rounded-2xl items-center p-2"
        >
          <Skeleton className="h-4 w-6 mx-2 shrink-0" />
          <Skeleton className="h-26 w-44 shrink-0 rounded-2xl" />

          <div className="flex w-full gap-3">
            <div className="w-full space-y-2">
              <Skeleton className="h-5 w-2/5" />
              <div className="flex gap-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-14" />
              </div>
            </div>
            <Skeleton className="h-5 w-12 ml-auto shrink-0" />
          </div>
        </article>
      ))}
    </div>
  )
}
