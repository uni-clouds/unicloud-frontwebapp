import { TitleDashboardProps } from './types'

export const Title: React.FC<TitleDashboardProps> = ({ text }) => {
  return <h3 className='font-semibold text-xl mb-2 py-2'>{text}</h3>
}
