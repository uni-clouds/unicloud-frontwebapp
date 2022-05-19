import { LinkInternalProps } from './types'

export const LinkInternal: React.FC<LinkInternalProps> = ({ name, href }) => {
  return (
    <a
      className='text-brand-600 hover:text-brand-700 transition-colors hover:ease-in-out'
      href={href}
      aria-label={`link to ${name}`}
      role='link'
    >
      {name}
    </a>
  )
}
