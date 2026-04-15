export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        {/* Animated gold ring */}
        <div className="relative size-16">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-gold" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-b-mint" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>

        {/* Skeleton sections */}
        <div className="w-full max-w-[1345px] space-y-8 px-6">
          {/* Title skeleton */}
          <div className="mx-auto h-8 w-64 animate-pulse rounded-lg bg-gold/10" />

          {/* Hero skeleton */}
          <div className="h-[480px] w-full animate-pulse rounded-[9px] bg-gold/5" />

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-[428px] animate-pulse rounded-lg bg-gold/5"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
