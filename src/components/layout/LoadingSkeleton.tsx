export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#060b14_0%,#0a1320_45%,#08111b_100%)] text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-355 flex-col gap-6 px-4 pb-14 pt-0 sm:gap-7 sm:px-6 sm:pb-16 lg:gap-8 lg:px-8 2xl:max-w-420">
        <div className="flex w-full flex-col gap-3 border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,16,25,0.78),rgba(7,16,25,0.18))] px-4 py-4 backdrop-blur-md sm:px-6 md:flex-row md:items-center md:justify-between md:gap-5 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="skeleton-line h-12 w-12 rounded-2xl" />
            <div className="flex flex-col gap-2">
              <div className="skeleton-line h-5 w-30" />
              <div className="skeleton-line h-3 w-24" />
            </div>
          </div>
          <div className="flex gap-4 md:gap-6">
            <div className="skeleton-line h-4 w-18" />
            <div className="skeleton-line h-4 w-18" />
            <div className="skeleton-line h-4 w-18" />
          </div>
          <div className="skeleton-line h-12 w-40 rounded-2xl" />
        </div>

        <div className="glass-panel relative mt-20 overflow-hidden rounded-4xl p-0 sm:mt-24">
          <div className="absolute inset-0 bg-[url('/section_1.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,20,0.96)_0%,rgba(7,16,28,0.82)_42%,rgba(8,17,27,0.52)_100%)]" />
          <div className="absolute inset-0 opacity-20 hero-grid-overlay" />
          <div className="absolute right-[8%] top-24 hidden h-36 w-36 rounded-full border border-white/8 bg-white/5 lg:block" />
          <div className="absolute right-[10%] top-34 hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_68%)] lg:block" />

          <div className="relative grid min-h-[calc(100vh-1rem)] items-end gap-6 px-3 py-12 sm:px-4 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:px-5 lg:py-16">
            <div className="flex max-w-3xl flex-col gap-4 self-center">
              <div className="skeleton-line h-10 w-108 max-w-full rounded-full" />
              <div className="skeleton-line h-24 w-full rounded-4xl" />
              <div className="skeleton-line h-24 w-[92%] rounded-4xl" />
              <div className="skeleton-line h-24 w-[70%] rounded-4xl" />
              <div className="mt-1 skeleton-line h-6 w-[82%]" />
              <div className="skeleton-line h-6 w-[76%]" />
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="skeleton-line h-14 w-48 rounded-2xl" />
                <div className="skeleton-line h-14 w-36 rounded-2xl" />
              </div>
              <div className="flex flex-wrap gap-2.5 pt-2">
                <div className="skeleton-line h-10 w-40 rounded-full" />
                <div className="skeleton-line h-10 w-40 rounded-full" />
                <div className="skeleton-line h-10 w-40 rounded-full" />
              </div>
            </div>

            <div className="grid gap-3 self-end lg:justify-self-end">
              <div className="skeleton-line h-44 w-full rounded-4xl lg:w-md" />
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                <div className="skeleton-line h-30 rounded-3xl" />
                <div className="skeleton-line h-30 rounded-3xl" />
                <div className="skeleton-line h-30 rounded-3xl" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="glass-panel p-5">
            <div className="skeleton-line h-14 w-14 rounded-2xl" />
            <div className="mt-5 skeleton-line h-10 w-2/3" />
            <div className="mt-4 skeleton-line h-px w-full rounded-none" />
            <div className="mt-4 skeleton-line h-5 w-full" />
            <div className="mt-2 skeleton-line h-5 w-10/12" />
          </div>
          <div className="glass-panel p-5">
            <div className="skeleton-line h-14 w-14 rounded-2xl" />
            <div className="mt-5 skeleton-line h-10 w-2/3" />
            <div className="mt-4 skeleton-line h-px w-full rounded-none" />
            <div className="mt-4 skeleton-line h-5 w-full" />
            <div className="mt-2 skeleton-line h-5 w-10/12" />
          </div>
          <div className="glass-panel p-5">
            <div className="skeleton-line h-14 w-14 rounded-2xl" />
            <div className="mt-5 skeleton-line h-10 w-2/3" />
            <div className="mt-4 skeleton-line h-px w-full rounded-none" />
            <div className="mt-4 skeleton-line h-5 w-full" />
            <div className="mt-2 skeleton-line h-5 w-10/12" />
          </div>
        </div>
      </div>
    </div>
  )
}
