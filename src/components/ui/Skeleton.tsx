type SkeletonProps = {
  className?: string
  tone?: 'default' | 'muted'
}

const tones = {
  default: 'bg-secondary',
  muted: 'bg-slate-700/50',
}

export default function Skeleton({ className = '', tone = 'default' }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`motion-safe:animate-pulse rounded-md ${tones[tone]} ${className}`}
    />
  )
}
