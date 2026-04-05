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
          'flex w-full flex-col gap-3 px-5 py-4 transition-[max-width,border-radius,background-color,backdrop-filter,box-shadow,border-color,transform,padding] duration-700 ease-fluid md:flex-row md:items-center md:justify-between md:gap-5 md:px-8',
          isFloating
            ? 'glass-panel mx-auto max-w-310 translate-y-0 rounded-[28px] border-white/12 bg-[linear-gradient(180deg,rgba(8,14,22,0.82),rgba(8,14,22,0.68))] shadow-[0_24px_70px_rgba(0,0,0,0.34)] md:rounded-full'
            : 'mx-0 max-w-none translate-y-0 rounded-none border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,16,25,0.78),rgba(7,16,25,0.18))] shadow-none backdrop-blur-md',
        ].join(' ')}
      >
        <a className="group flex items-center gap-3" href="#inicio" aria-label={`${brand.name} ${brand.tag}`}>
          <span className="relative h-12 w-12 overflow-hidden rounded-2xl bg-linear-to-br from-sky-200 to-blue-400 shadow-[0_10px_30px_rgba(74,144,226,0.24)]">
            <span className="absolute inset-1.75 rounded-xl bg-linear-to-br from-slate-950 via-slate-900 to-slate-700" />
            <span className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,transparent_38%,rgba(74,144,226,0.62)_100%)]" />
            <span className="absolute left-1/2 top-[22%] h-[52%] w-[18%] -translate-x-1/2 skew-x-[-14deg] bg-white/92" />
            <span className="absolute left-[28%] top-[52%] h-[14%] w-[48%] -translate-y-1/2 skew-x-[20deg] bg-white/92" />
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
    </header>
  )
}