import { Title } from '../../Elements/TitleDashboard'

export const Table: React.FC = () => {
  return (
    <div className='w-2/3 h-full flex flex-col bg-white p-4 text-base-700 rounded-md shadow'>
      <div>
        <Title text='Table here' />
      </div>
      <div className='w-ful h-full grid place-content-center'></div>
    </div>
  )
}
