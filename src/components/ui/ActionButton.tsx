import type { ActionLink } from '../../data/landingContent'

type ActionButtonProps = Readonly<{
  action: ActionLink
  compact?: boolean
  asButton?: boolean
  disabled?: boolean
}>

export function ActionButton({ action, compact = false, asButton = false, disabled = false }: ActionButtonProps) {
  const variant = action.variant ?? 'primary'
  const baseClassName = compact
    ? 'inline-flex min-h-12 items-center justify-center rounded-2xl px-5 py-3 text-sm font-bold transition duration-300 hover:-translate-y-0.5'
    : 'inline-flex min-h-14 items-center justify-center rounded-2xl px-6 py-4 text-base font-bold transition duration-300 hover:-translate-y-1'
  const variantClassName =
    variant === 'primary'
      ? 'bg-linear-to-b from-sky-400 to-blue-600 text-white shadow-[0_18px_35px_rgba(74,144,226,0.32)] hover:shadow-[0_22px_45px_rgba(74,144,226,0.42)]'
      : 'border border-white/12 bg-white/8 text-white backdrop-blur-md hover:border-white/20 hover:bg-white/12'
  const className = `${baseClassName} ${variantClassName} ${disabled ? 'cursor-not-allowed opacity-60 hover:translate-y-0' : ''}`

  if (asButton) {
    return (
      <button className={className} type="submit" disabled={disabled}>
        {action.label}
      </button>
    )
  }

  return (
    <a className={className} href={action.href}>
      {action.label}
    </a>
  )
}