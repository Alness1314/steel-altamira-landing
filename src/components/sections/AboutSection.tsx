import sectionTwoImage from '../../assets/section_2.webp'
import type { Metric } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type AboutSectionProps = Readonly<{
  about: {
    title: string
    description: string
    body: string
    highlight: string
    badgeValue: string
    badgeLabel: string
    stats: Metric[]
  }
}>

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section id="nosotros" className="section-frame scroll-mt-24 px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
      <div className="grid items-center gap-5 lg:grid-cols-[1.05fr_minmax(0,0.95fr)]">
        <Reveal from="left" className="relative min-h-96 overflow-hidden rounded-4xl border border-white/10 bg-black/20">
          <img
            src={sectionTwoImage}
            alt="Planta industrial con produccion de acero"
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,19,0.15),rgba(9,13,19,0.75))]" />
          <div className="absolute left-5 top-5 rounded-full border border-white/12 bg-black/35 px-4 py-2 backdrop-blur-md sm:left-6 sm:top-6">
            <span className="font-display text-2xl font-extrabold text-white">{about.badgeValue}</span>
            <span className="ml-2 text-xs uppercase tracking-[0.24em] text-white/65">{about.badgeLabel}</span>
          </div>
          <div className="absolute inset-x-4 bottom-4 rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
            <p className="max-w-sm text-base leading-7 text-white/80">{about.highlight}</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading title={about.title} description={about.description} align="left" revealFrom="right" />
          <Reveal from="bottom" delay={140}>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/72">{about.body}</p>

            {about.stats.length > 0 ? (
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {about.stats.map((metric) => (
                  <div
                    className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.74),rgba(10,18,29,0.54))] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur-md"
                    key={metric.label}
                  >
                    <span className="block font-display text-3xl font-extrabold text-white">{metric.value}</span>
                    <span className="mt-2 block text-sm font-medium text-white/62">{metric.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  )
}