import type { ActionLink, Metric } from '../../data/landingContent'
import { ActionButton } from '../ui/ActionButton'
import { Reveal } from '../ui/Reveal'

type HeroSectionProps = Readonly<{
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: ActionLink
    secondaryAction: ActionLink
    metrics: Metric[]
    highlights: string[]
  }
}>

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section id="inicio" className="section-frame mt-2 min-h-[calc(100vh-1rem)] scroll-mt-24 p-0 sm:mt-6 md:mt-20 lg:mt-24">
      <div className="absolute inset-0 bg-[url('/section_1.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,11,20,0.96)_0%,rgba(7,16,28,0.82)_42%,rgba(8,17,27,0.52)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(74,144,226,0.26),transparent_24%)]" />
      <div className="hero-grid-overlay absolute inset-0 opacity-20" />
      <div className="absolute right-[8%] top-24 hidden h-36 w-36 rounded-full border border-white/12 bg-white/6 backdrop-blur-xl lg:block lg:animate-drift" />
      <div className="absolute right-[10%] top-34 hidden h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(121,183,255,0.42),transparent_68%)] lg:block" />

      <div className="relative grid min-h-[calc(100vh-1rem)] items-end gap-6 px-3 py-12 sm:px-4 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:px-5 lg:py-16">
        <Reveal from="left" className="max-w-3xl self-center">
          <span className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-white/75 backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_18px_rgba(121,183,255,0.9)]" />
            {hero.eyebrow}
          </span>

          <h1 className="max-w-3xl font-display text-5xl font-extrabold leading-[0.95] text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.55)] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ActionButton action={hero.primaryAction} />
            <ActionButton action={hero.secondaryAction} />
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {hero.highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-black/25 px-4 py-2 text-sm font-medium text-white/78 backdrop-blur-md"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal from="right" className="grid gap-3 self-end lg:justify-self-end" delay={150}>
          <div className="animate-float rounded-[28px] border border-sky-200/12 bg-[linear-gradient(180deg,rgba(12,24,38,0.78),rgba(8,18,30,0.58))] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.3)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-100/50">Capacidad</p>
            <p className="mt-3 font-display text-4xl font-extrabold text-white">Fabricacion escalable</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-white/68">
              Procesos pensados para obra industrial, manufactura y suministro continuo.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {hero.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.72),rgba(10,18,29,0.52))] p-4 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-sky-400/35"
              >
                <span className="block font-display text-3xl font-extrabold text-white">{metric.value}</span>
                <span className="mt-2 block text-sm font-medium text-white/65">{metric.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}