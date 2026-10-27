import HeroSkeleton from "./HeroSkeleton"
import MainCastSkeleton from "./MainCastSkeleton"
import SeasonsSkeleton from "./SeasonsSkeleton"

type DetailsSkeletonProps = {
  mediaType: 'movie' | 'tv'
}

export default function DetailsSkeleton({ mediaType }: DetailsSkeletonProps) {
  return (
    <>
      <span role="status" className="sr-only">
        Cargando detalles…
      </span>

      <div aria-hidden="true">
        <HeroSkeleton />
        <MainCastSkeleton />
        {mediaType === 'tv' && <SeasonsSkeleton />}
      </div>
    </>
  )
}
