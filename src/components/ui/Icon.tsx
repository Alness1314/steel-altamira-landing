type IconName =
  | 'structure'
  | 'welding'
  | 'distribution'
  | 'mail'
  | 'phone'
  | 'location'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'chevron'

type IconProps = {
  name: IconName
  large?: boolean
}

export function Icon({ name, large = false }: IconProps) {
  const className = large ? 'icon icon--large' : 'icon'

  switch (name) {
    case 'structure':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 26V10h8v16H3Zm9 0V4h8v22h-8Zm9 0V12h8v14h-8Z" fill="currentColor" />
          <path d="M5 29h22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'welding':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="m8 23 8-13 6 4-8 13H8Z" fill="currentColor" />
          <path d="M22 14 27 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="m20 19 2 3M24 18l3 1M18 22l1 4" stroke="#EF6C08" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'distribution':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M3 10c1.2-1.7 3.4-3 5.7-3h14.6c2.3 0 4.5 1.3 5.7 3l-8.4 3.6H11.4L3 10Z" fill="currentColor" />
          <path d="M9 25h14M6 20h20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M11 13.5v11M21 13.5v11" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'mail':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2.5" />
          <path d="m6 10 10 8 10-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'phone':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M9.7 5.5h3.5c.8 0 1.5.5 1.8 1.2l1.2 3.1c.3.7.1 1.5-.4 2l-1.8 1.8a19 19 0 0 0 4.3 4.3l1.8-1.8c.6-.5 1.4-.7 2.1-.4l3 1.2c.8.3 1.3 1 1.3 1.8v3.5c0 1.2-.9 2.2-2.1 2.3-9.6.8-17.4-7-16.6-16.6.1-1.2 1.1-2.1 2.3-2.1Z" fill="currentColor" />
        </svg>
      )
    case 'location':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 28s8-7.6 8-14a8 8 0 1 0-16 0c0 6.4 8 14 8 14Z" fill="currentColor" />
          <circle cx="16" cy="14" r="3" fill="#10151D" />
        </svg>
      )
    case 'facebook':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M18.2 27v-9h3l.5-3.6h-3.5v-2.3c0-1 .3-1.8 1.8-1.8H22V7.2c-.4 0-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.2h-3V18h3v9h4.2Z" fill="currentColor" />
        </svg>
      )
    case 'instagram':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <rect x="7" y="7" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="16" cy="16" r="4.2" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="22.1" cy="9.9" r="1.2" fill="currentColor" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M8.6 12.8h4v12h-4v-12Zm2-6a2.3 2.3 0 1 1 0 4.6 2.3 2.3 0 0 1 0-4.6Zm5.2 6h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.7 2.6 4.7 6v6.4h-4v-5.7c0-1.4 0-3-1.9-3s-2.2 1.5-2.2 3v5.7h-4v-12Z" fill="currentColor" />
        </svg>
      )
    case 'chevron':
      return (
        <svg className={className} viewBox="0 0 64 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 2h22l8 8 8-8h22" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}