import type { ProcessStep } from '../../data/landingContent'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type ProcessSectionProps = Readonly<{
  process: {
    title: string
    description: string
    steps: ProcessStep[]
  }
}>

export function ProcessSection({ process }: ProcessSectionProps) {
  const revealDirections: Array<'left' | 'bottom' | 'right'> = ['left', 'bottom', 'right']

  return (
    <section className="section-frame px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
      <SectionHeading title={process.title} description={process.description} revealFrom="bottom" />

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {process.steps.map((step, index) => (
          <Reveal key={step.title} from={revealDirections[index] ?? 'bottom'} delay={index * 110}>
            <article className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.74),rgba(10,18,29,0.54))] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-400/16 font-display text-xl font-extrabold text-sky-300">
                0{index + 1}
              </span>
              <h3 className="mt-5 font-display text-3xl font-bold text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/70">{step.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
