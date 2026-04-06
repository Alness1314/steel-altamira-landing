import type { ContactDetail, SocialLink } from '../../data/landingContent'
import { ActionButton } from '../ui/ActionButton'
import { Icon } from '../ui/Icon'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

type ContactSectionProps = Readonly<{
  contact: {
    title: string
    description: string
    details: ContactDetail[]
    socials: SocialLink[]
    submitLabel: string
    footerNote: string
  }
}>

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="contacto" className="section-frame scroll-mt-24 px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
      <SectionHeading title={contact.title} description={contact.description} revealFrom="bottom" />

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <Reveal from="left">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <form className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                aria-label="Nombre"
                className="rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                aria-label="Correo"
                className="rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                aria-label="Mensaje"
                className="min-h-40 rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <ActionButton action={{ label: contact.submitLabel, href: '#contacto', variant: 'primary' }} asButton />
            </form>
          </div>
        </Reveal>

        <Reveal from="right" delay={120}>
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <ul className="grid gap-5">
              {contact.details.map((item) => (
                <li key={item.title} className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/25 text-white">
                    <Icon name={item.icon} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-base leading-7 text-white/72">
                      {item.href ? (
                        <a href={item.href} className="transition hover:text-white">
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {contact.socials.length > 0 ? (
              <div className="mt-8 flex gap-3" aria-label="Redes sociales">
                {contact.socials.map((item) => (
                  item.href ? (
                    <a
                      key={item.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white transition duration-300 hover:-translate-y-1 hover:border-sky-400/55 hover:bg-sky-500/15"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                    >
                      <Icon name={item.icon} />
                    </a>
                  ) : (
                    <span
                      key={item.label}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-black/25 text-white/88"
                      aria-label={item.label}
                      title={item.label}
                    >
                      <Icon name={item.icon} />
                    </span>
                  )
                ))}
              </div>
            ) : null}

            <p className="mt-6 max-w-md text-base leading-7 text-white/62">
              {contact.footerNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}