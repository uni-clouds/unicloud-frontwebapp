import { TitleDashboardProps } from './types'

export const Title: React.FC<TitleDashboardProps> = ({ text }) => {
  return (
    <h3 className='font-medium text-xl mb-2 py-2 text-base-700 dark:text-slate-100'>{text}</h3>
  )
}
