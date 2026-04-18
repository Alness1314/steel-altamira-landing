import { useMemo, useState } from 'react'
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

function getBackendMessage(payloadText: string, fallback: string) {
  if (!payloadText.trim()) {
    return fallback
  }

  try {
    const parsed = JSON.parse(payloadText) as {
      message?: string | string[]
      error?: string
    }

    if (typeof parsed.message === 'string' && parsed.message.trim()) {
      return parsed.message
    }

    if (Array.isArray(parsed.message) && parsed.message.length > 0) {
      return parsed.message.join(', ')
    }

    if (typeof parsed.error === 'string' && parsed.error.trim()) {
      return parsed.error
    }
  } catch {
    return payloadText
  }

  return fallback
}

export function ContactSection({ contact }: ContactSectionProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const [isErrorModal, setIsErrorModal] = useState(false)

  const contactEndpoint = useMemo(() => {
    const baseUrl = (import.meta.env.VITE_BACKEND_URL ?? '').trim()
    const normalizedBase = baseUrl.replace(/\/+$/, '')

    if (!normalizedBase) {
      return ''
    }

    return `${normalizedBase}/api/contact`
  }, [])

  async function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault()

    if (!contactEndpoint) {
      setIsErrorModal(true)
      setModalMessage('Configura VITE_BACKEND_URL en el archivo .env para activar el formulario.')
      setIsModalOpen(true)
      return
    }

    setIsSubmitting(true)
    setIsModalOpen(false)

    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          subject: 'cotizacion',
          message: message.trim(),
        }),
      })

      const rawMessage = await response.text()

      if (!response.ok) {
        throw new Error(getBackendMessage(rawMessage, 'No se pudo enviar el mensaje'))
      }

      setName('')
      setEmail('')
      setMessage('')
      setIsErrorModal(false)
      setModalMessage(getBackendMessage(rawMessage, 'Mensaje enviado correctamente. Te contactaremos pronto.'))
      setIsModalOpen(true)
    } catch (error) {
      const fallbackMessage = 'Ocurrio un error al enviar el mensaje. Intenta nuevamente.'
      const finalMessage = error instanceof Error && error.message.trim() ? error.message : fallbackMessage

      setIsErrorModal(true)
      setModalMessage(finalMessage)
      setIsModalOpen(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="section-frame scroll-mt-24 px-3 py-7 sm:px-4 sm:py-8 lg:px-5 lg:py-9">
      <SectionHeading title={contact.title} description={contact.description} revealFrom="bottom" />

      <div className="mt-7 grid gap-4 lg:grid-cols-2">
        <Reveal from="left">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(18,29,45,0.78),rgba(10,18,29,0.58))] p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                aria-label="Nombre"
                autoComplete="name"
                maxLength={120}
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <input
                type="email"
                name="email"
                placeholder="Correo"
                aria-label="Correo"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <textarea
                name="message"
                placeholder="Mensaje"
                aria-label="Mensaje"
                maxLength={5000}
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                className="min-h-40 rounded-2xl border border-white/12 bg-black/25 px-4 py-4 text-white outline-none transition placeholder:text-white/40 focus:border-sky-400/70 focus:bg-black/35"
              />
              <input type="hidden" name="subject" value="cotizacion" />
              <ActionButton
                action={{ label: contact.submitLabel, href: '#contacto', variant: 'primary' }}
                asButton
                disabled={isSubmitting}
              />
              {isSubmitting ? (
                <div className="flex items-center gap-3 text-sm text-white/70" role="status" aria-live="polite">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-white" aria-hidden="true" />
                  <span>Enviando mensaje...</span>
                </div>
              ) : null}
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

            <p className="mt-6 max-w-md text-2xl leading-7 text-white/62">
              {contact.footerNote}
            </p>
          </div>
        </Reveal>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4">
          <div className="w-full max-w-md rounded-3xl border border-white/15 bg-[linear-gradient(180deg,rgba(18,29,45,0.95),rgba(10,18,29,0.95))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <h3 className={`font-display text-2xl font-bold ${isErrorModal ? 'text-rose-300' : 'text-emerald-300'}`}>
              {isErrorModal ? 'Error al enviar' : 'Mensaje enviado'}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/85">{modalMessage}</p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-linear-to-b from-sky-400 to-blue-600 px-6 py-3 text-base font-bold text-white shadow-[0_18px_35px_rgba(74,144,226,0.32)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(74,144,226,0.42)]"
                onClick={() => setIsModalOpen(false)}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}