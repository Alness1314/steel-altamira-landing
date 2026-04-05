import type { Service } from '../../data/landingContent'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type ServicesSectionProps = Readonly<{
  services: {
    title: string
    description: string
    items: Service[]
  }
}>

export function ServicesSection({ services }: ServicesSectionProps) {
  const revealDirections: Array<'left' | 'bottom' | 'right'> = ['left', 'bottom', 'right']

  return (
    <section id="servicios" className="section-frame scroll-mt-24 px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
      <SectionHeading title={services.title} description={services.description} revealFrom="bottom" />

      <div className="mt-7 grid gap-4 lg:grid-cols-3">
        {services.items.map((service, index) => (
          <Reveal key={service.title} from={revealDirections[index] ?? 'bottom'} delay={index * 110}>
            <article className="group relative h-full overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1.5 hover:border-sky-400/40 hover:bg-[linear-gradient(180deg,rgba(20,34,52,0.84),rgba(12,21,34,0.66))]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(121,183,255,0.18),transparent_32%)] opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                  <Icon name={service.icon} large />
                </div>
                <h3 className="mt-5 max-w-[14ch] font-display text-3xl font-bold leading-tight text-white">
                  {service.title}
                </h3>
                <div className="my-5 h-px w-full bg-linear-to-r from-sky-400 via-blue-300/35 to-transparent" />
                <p className="text-base leading-7 text-white/72">{service.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}