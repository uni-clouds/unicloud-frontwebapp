import { useTranslation } from 'react-i18next'
import { Heading } from '../../components/Heading'
import { HeaderProps } from './types'

export const Header: React.FC<HeaderProps> = () => {
  const { t: translate } = useTranslation()
  return (
    <div className='w-full py-6 px-4 flex row justify-between items-center'>
      <div className='flex flex-col gap-3'>
        <Heading as='h2' size='big'>
          {translate('resources')}
        </Heading>
      </div>
    </div>
  )
}
