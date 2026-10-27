import Skeleton from "@/components/ui/Skeleton"

export default function ResultCardSkeleton() {
  return (
    <article aria-hidden="true" className="rounded-2xl bg-secondary overflow-hidden">
      <Skeleton tone="muted" className="aspect-5/7 w-full rounded-2xl" />

      <div className="py-3 pl-4">
        <Skeleton tone="muted" className="h-5 w-4/5 mb-2" />
        <div className="flex gap-2 items-center">
          <Skeleton tone="muted" className="h-4 w-10" />
          <span className="w-1 h-1 rounded-full bg-zinc-600" />
          <Skeleton tone="muted" className="h-4 w-14" />
        </div>
      </div>
    </article>
  )
}
