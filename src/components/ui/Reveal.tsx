import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = Readonly<{
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}>

export function Reveal({ children, className = '', delay = 0, from = 'bottom' }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      data-reveal-from={from}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
