export function LoadingSkeleton() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(74,144,226,0.2),transparent_24%),radial-gradient(circle_at_82%_12%,rgba(138,201,255,0.1),transparent_18%),linear-gradient(180deg,#060b14_0%,#0a1320_42%,#08111b_100%)] text-stone-50">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.08]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-184 bg-[url('/section_1.png')] bg-cover bg-center opacity-22 blur-2xl" />
      <div className="pointer-events-none absolute -left-56 top-20 h-80 w-80 rounded-full bg-sky-500/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 top-128 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl" />

      <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full">
        <div className="w-full border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,16,25,0.78),rgba(7,16,25,0.18))] px-4 py-3 backdrop-blur-md sm:px-6 md:px-6 md:py-4 lg:px-8">
          <div className="mx-auto flex w-full max-w-355 items-center justify-between gap-5 2xl:max-w-420">
            <div className="flex items-center gap-3">
              <div className="skeleton-line h-12 w-12 rounded-2xl sm:h-14 sm:w-14" />
              <div className="flex flex-col gap-2">
                <div className="skeleton-line h-5 w-30" />
                <div className="skeleton-line h-3 w-24" />
              </div>
            </div>

            <div className="hidden items-center gap-6 md:flex">
              <div className="skeleton-line h-4 w-16" />
              <div className="skeleton-line h-4 w-16" />
              <div className="skeleton-line h-4 w-16" />
            </div>

            <div className="hidden md:block">
              <div className="skeleton-line h-12 w-44 rounded-2xl" />
            </div>

            <div className="skeleton-line h-12 w-12 rounded-2xl md:hidden" />
          </div>
        </div>
      </header>

      <main className="relative w-full pb-14 pt-18 sm:pb-16 sm:pt-22 md:pt-0">
        <div className="mx-auto w-full max-w-355 px-4 sm:px-6 lg:px-8 2xl:max-w-420">
          <div className="flex flex-col gap-6 sm:gap-7 lg:gap-8">
            <section className="section-frame mt-2 min-h-[calc(100vh-1rem)] p-0 sm:mt-6 md:mt-20 lg:mt-35">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,20,0.96)_0%,rgba(7,16,28,0.82)_42%,rgba(8,17,27,0.52)_100%)]" />
              <div className="hero-grid-overlay absolute inset-0 opacity-20" />

              <div className="relative grid min-h-[calc(100vh-1rem)] items-end gap-6 px-3 py-12 sm:px-4 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:px-5 lg:py-16">
                <div className="max-w-3xl self-center">
                  <div className="skeleton-line mb-5 h-10 w-86 max-w-full rounded-full" />
                  <div className="skeleton-line h-18 w-full max-w-176 rounded-3xl sm:h-20" />
                  <div className="mt-3 skeleton-line h-18 w-[86%] rounded-3xl sm:h-20" />
                  <div className="mt-6 skeleton-line h-5 w-[88%]" />
                  <div className="mt-2 skeleton-line h-5 w-[72%]" />

                  <div className="mt-6 flex flex-wrap gap-3">
                    <div className="skeleton-line h-12 w-48 rounded-2xl" />
                    <div className="skeleton-line h-12 w-36 rounded-2xl" />
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2.5">
                    <div className="skeleton-line h-10 w-34 rounded-full" />
                    <div className="skeleton-line h-10 w-40 rounded-full" />
                    <div className="skeleton-line h-10 w-44 rounded-full" />
                  </div>
                </div>

                <div className="grid gap-3 self-end lg:justify-self-end">
                  <div className="rounded-[28px] border border-white/10 bg-black/25 p-4 backdrop-blur-xl">
                    <div className="skeleton-line h-4 w-32" />
                    <div className="mt-3 skeleton-line h-12 w-64 max-w-full" />
                    <div className="mt-3 skeleton-line h-4 w-56 max-w-full" />
                    <div className="mt-2 skeleton-line h-4 w-44 max-w-full" />
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                    <div className="skeleton-line h-30 rounded-3xl" />
                    <div className="skeleton-line h-30 rounded-3xl" />
                    <div className="skeleton-line h-30 rounded-3xl" />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-frame px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
              <div className="mx-auto max-w-2xl">
                <div className="skeleton-line mx-auto h-11 w-64" />
                <div className="mt-4 skeleton-line mx-auto h-4 w-full" />
                <div className="mt-2 skeleton-line mx-auto h-4 w-[82%]" />
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-3">
                {['service-a', 'service-b', 'service-c'].map((key) => (
                  <div key={key} className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5">
                    <div className="skeleton-line h-16 w-16 rounded-2xl" />
                    <div className="mt-5 skeleton-line h-10 w-2/3" />
                    <div className="my-5 skeleton-line h-px w-full rounded-none" />
                    <div className="skeleton-line h-5 w-full" />
                    <div className="mt-2 skeleton-line h-5 w-10/12" />
                  </div>
                ))}
              </div>
            </section>

            <section className="section-frame px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
              <div className="grid items-center gap-5 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
                <div className="relative min-h-96 overflow-hidden rounded-4xl border border-white/10 bg-black/20 p-5 sm:p-6">
                  <div className="skeleton-line h-11 w-40 rounded-full" />
                  <div className="absolute inset-x-5 bottom-5">
                    <div className="rounded-3xl border border-white/10 bg-black/35 p-4">
                      <div className="skeleton-line h-5 w-full" />
                      <div className="mt-2 skeleton-line h-5 w-11/12" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="skeleton-line h-11 w-56" />
                  <div className="mt-4 skeleton-line h-4 w-full" />
                  <div className="mt-2 skeleton-line h-4 w-4/5" />
                  <div className="mt-6 skeleton-line h-5 w-full" />
                  <div className="mt-2 skeleton-line h-5 w-11/12" />

                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="skeleton-line h-28 rounded-3xl" />
                    <div className="skeleton-line h-28 rounded-3xl" />
                    <div className="skeleton-line h-28 rounded-3xl" />
                  </div>
                </div>
              </div>
            </section>

            <section className="section-frame px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
              <div className="mx-auto max-w-2xl">
                <div className="skeleton-line mx-auto h-11 w-60" />
                <div className="mt-4 skeleton-line mx-auto h-4 w-full" />
                <div className="mt-2 skeleton-line mx-auto h-4 w-[78%]" />
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-6">
                {[
                  { key: 'process-a', wide: false },
                  { key: 'process-b', wide: false },
                  { key: 'process-c', wide: false },
                  { key: 'process-d', wide: true },
                  { key: 'process-e', wide: true },
                ].map((item) => (
                  <div key={item.key} className={item.wide ? 'lg:col-span-3' : 'lg:col-span-2'}>
                    <div className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.74),rgba(10,18,29,0.54))] p-5">
                      <div className="skeleton-line h-12 w-12 rounded-2xl" />
                      <div className="mt-5 skeleton-line h-9 w-2/3" />
                      <div className="mt-4 skeleton-line h-5 w-full" />
                      <div className="mt-2 skeleton-line h-5 w-11/12" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="section-frame px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
              <div className="mx-auto max-w-2xl">
                <div className="skeleton-line mx-auto h-11 w-56" />
                <div className="mt-4 skeleton-line mx-auto h-4 w-full" />
                <div className="mt-2 skeleton-line mx-auto h-4 w-[74%]" />
              </div>

              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5">
                  <div className="grid gap-4">
                    <div className="skeleton-line h-14 rounded-2xl" />
                    <div className="skeleton-line h-14 rounded-2xl" />
                    <div className="skeleton-line h-40 rounded-2xl" />
                    <div className="skeleton-line h-12 w-40 rounded-2xl" />
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5">
                  <div className="grid gap-5">
                    {['contact-a', 'contact-b', 'contact-c'].map((key) => (
                      <div key={key} className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4">
                        <div className="skeleton-line h-14 w-14 rounded-2xl" />
                        <div>
                          <div className="skeleton-line h-8 w-40" />
                          <div className="mt-2 skeleton-line h-5 w-52 max-w-full" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex gap-3">
                    <div className="skeleton-line h-12 w-12 rounded-full" />
                    <div className="skeleton-line h-12 w-12 rounded-full" />
                    <div className="skeleton-line h-12 w-12 rounded-full" />
                  </div>

                  <div className="mt-6 skeleton-line h-5 w-full" />
                  <div className="mt-2 skeleton-line h-5 w-4/5" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
