import { useTranslation } from 'react-i18next'
import { Heading } from '../../components/Heading'
import { RESOURCES_TYPES_LINKS } from '../../constants/navigation'
import { NavigationTabs } from '../NavigationTabs'
import { HeaderProps } from '../../templates/ResourcesTypes/types'

export const Header: React.FC<HeaderProps> = () => {
  const { t: translate } = useTranslation()
  return (
    <div className='w-full p-4  flex flex-col items-start gap-5'>
      <NavigationTabs links={RESOURCES_TYPES_LINKS} />
      <Heading as='h2' size='big'>
        {translate('resources')}
      </Heading>
    </div>
  )
}
