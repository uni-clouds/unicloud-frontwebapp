import { DividerProps } from './types'

export const Divider: React.FC<DividerProps> = ({ text }) => {
  return <div className='divider uppercase'>{text}</div>
}
