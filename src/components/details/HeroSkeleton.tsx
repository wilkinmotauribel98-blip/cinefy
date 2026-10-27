import Skeleton from "@/components/ui/Skeleton"

export default function HeroSkeleton() {
  return (
    <section
      aria-hidden="true"
      className="flex gap-10 mt-10 flex-col items-center w-full lg:items-stretch lg:flex-row"
    >
      <div className="w-full max-w-100 h-fit lg:w-3/10 xl:w-3.5/10">
        <Skeleton className="w-full aspect-5/7 lg:aspect-5/8 rounded-2xl" />
      </div>

      <div className="lg:w-7/10 w-full">
        <Skeleton className="h-9 w-3/5 max-w-100" />

        <div className="flex gap-2 mt-3">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-14" />
        </div>

        <div className="mt-6 flex gap-3 items-center">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>

        <div className="flex gap-2 mt-3">
          <Skeleton className="h-8 w-24 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-16 rounded-full" />
        </div>

        <div className="mt-5">
          <Skeleton className="h-7 w-32" />
          <div className="mt-3 max-w-220 lg:max-w-200 xl:max-w-180 space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-6 w-full">
          <Skeleton className="h-12 w-full rounded-full lg:w-40" />
          <Skeleton className="h-12 w-full rounded-full lg:w-44" />
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-10 bg-secondary rounded-xl w-fit mt-7 py-6 px-15">
          <div className="space-y-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
