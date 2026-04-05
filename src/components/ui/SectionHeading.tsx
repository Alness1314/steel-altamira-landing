import { Icon } from './Icon'
import { Reveal } from './Reveal'

type SectionHeadingProps = Readonly<{
  title: string
  description?: string
  align?: 'center' | 'left'
  revealFrom?: 'bottom' | 'left' | 'right'
}>

export function SectionHeading({
  title,
  description,
  align = 'center',
  revealFrom = 'bottom',
}: SectionHeadingProps) {
  const alignmentClassName = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <Reveal from={revealFrom} className={`flex flex-col gap-4 ${alignmentClassName}`}>
      <h2 className="font-display text-4xl font-extrabold leading-none text-white sm:text-5xl">{title}</h2>
      <div className="text-sky-400">
        <Icon name="chevron" />
      </div>
      {description ? <p className="max-w-2xl text-base leading-7 text-white/68 sm:text-lg">{description}</p> : null}
    </Reveal>
  )
}