import { useNavigate } from 'react-router-dom'
import { MdKeyboardBackspace } from 'react-icons/md'
import { PurpleButton } from '../../../components/Elements/Buttons/PurpleButton'
import { PathActive } from '../../../components/Elements/Navigation/PathActive'

import { HeaderProps } from './types'
import { useTranslation } from 'react-i18next'

export const Header: React.FC<HeaderProps> = ({ data }) => {
  const navigate = useNavigate()
  const { t: translate } = useTranslation()
  const totalInvites = Number(data?.length)
  const paths = [
    { path: `${translate('users')}`, route: 'user-list-default' },
    { path: `${translate('invitations')}`, route: 'user-list-default/invite' }
  ]

  return (
    <div className='w-full flex flex-row justify-between px-4 mb-6'>
      <div className='flex flex-col gap-2 justify-start'>
        <PathActive paths={paths} />
        <h1 className='text-3xl font-bold text-base-700 dark:text-base-100'>
          {translate('invitations')}
        </h1>
        <p className='text-base-400'>
          {translate('pageSubtitle-1')} {totalInvites}{' '}
          {totalInvites > 1
            ? translate('customersUsers:invitations-subtitle-2-plural')
            : translate('customersUsers:invitations-subtitle-2-singular')}
        </p>
      </div>
      <div className='flex flex-row gap-4'>
        <PurpleButton name='back' onclick={() => navigate(-1)}>
          <MdKeyboardBackspace fontSize={20} />
          {translate('back')}
        </PurpleButton>
      </div>
    </div>
  )
}
