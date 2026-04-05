import { useEffect, useState } from 'react'
import type { ActionLink, NavItem } from '../../data/landingContent'
import { ActionButton } from '../ui/ActionButton'

type SiteHeaderProps = Readonly<{
  brand: {
    name: string
    tag: string
  }
  navigation: NavItem[]
  cta: ActionLink
}>

export function SiteHeader({ brand, navigation, cta }: SiteHeaderProps) {
  const [isFloating, setIsFloating] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsFloating(globalThis.scrollY > 18)
    }

    onScroll()
    globalThis.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      globalThis.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 mx-auto w-full transition-all duration-500',
        isFloating ? 'pt-3' : 'pt-0',
      ].join(' ')}
    >
      <div
        className={[
          'w-full px-4 py-3 transition-[max-width,border-radius,background-color,backdrop-filter,box-shadow,border-color,transform,padding] duration-700 ease-fluid sm:px-6 md:flex md:items-center md:justify-between md:gap-5 md:px-6 md:py-4 lg:px-8',
          isFloating
            ? 'glass-panel mx-auto max-w-355 translate-y-0 rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(8,14,22,0.82),rgba(8,14,22,0.68))] shadow-[0_24px_70px_rgba(0,0,0,0.34)] md:rounded-full 2xl:max-w-420'
            : 'mx-0 max-w-none translate-y-0 rounded-none border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,16,25,0.78),rgba(7,16,25,0.18))] shadow-none backdrop-blur-md',
        ].join(' ')}
      >
        <div className="flex items-center justify-between gap-3">
          <a className="group flex items-center gap-3" href="#inicio" aria-label={`${brand.name} ${brand.tag}`}>
            <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-linear-to-br from-sky-200 to-blue-400 shadow-[0_10px_30px_rgba(74,144,226,0.24)]">
              <span className="absolute inset-1.75 rounded-xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-700" />
              <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_38%,rgba(74,144,226,0.62)_100%)]" />
              <span className="absolute left-1/2 top-[22%] h-[52%] w-[18%] -translate-x-1/2 skew-x-[-14deg] bg-white/92" />
              <span className="absolute left-[28%] top-[52%] h-[14%] w-[48%] -translate-y-1/2 skew-x-20 bg-white/92" />
            </span>

            <span className="flex flex-col leading-none">
              <strong className="font-display text-xl font-extrabold uppercase tracking-[0.03em] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                {brand.name}
              </strong>
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-white/60">
                {brand.tag}
              </span>
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-black/25 text-white transition hover:border-sky-400/45 hover:bg-black/35 md:hidden"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-main-menu"
            onClick={() => {
              setIsMenuOpen((current) => !current)
            }}
          >
            <span className="relative h-5 w-5">
              <span
                className={[
                  'absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300',
                  isMenuOpen ? 'translate-y-2 rotate-45' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-2 block h-0.5 w-5 rounded-full bg-current transition-opacity duration-300',
                  isMenuOpen ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-transform duration-300',
                  isMenuOpen ? '-translate-y-2 -rotate-45' : '',
                ].join(' ')}
              />
            </span>
          </button>
        </div>

        <div id="mobile-main-menu" className={isMenuOpen ? 'mt-3 grid gap-2.5 md:hidden' : 'hidden md:hidden'}>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 px-5 py-3 text-sm font-bold text-white transition hover:border-white/20 hover:bg-white/12"
              onClick={() => {
                setIsMenuOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={cta.href}
            className="inline-flex min-h-12 items-center justify-center rounded-2xl bg-linear-to-b from-sky-400 to-blue-600 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_35px_rgba(74,144,226,0.32)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(74,144,226,0.42)]"
            onClick={() => {
              setIsMenuOpen(false)
            }}
          >
            {cta.label}
          </a>
        </div>

        <div className="hidden md:flex md:items-center md:justify-between md:gap-5">
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-white/78 md:gap-6 md:text-[15px]" aria-label="Principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="relative transition duration-300 hover:-translate-y-0.5 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-sky-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ActionButton action={cta} compact />
        </div>
      </div>
    </header>
  )
}