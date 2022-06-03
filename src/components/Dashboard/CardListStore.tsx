import { v4 as uuidv4 } from 'uuid'
import { AiOutlineShopping } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { FiBox } from 'react-icons/fi'
import { BiCategory } from 'react-icons/bi'
import { Title } from '../Elements/TitleDashboard'

export const CardListStore: React.FC = () => {
  const mockData = [
    {
      title: 'orders',
      value: 1.795
    },
    {
      title: 'customers',
      value: 3.999
    },
    {
      title: 'products',
      value: 658
    },
    {
      title: 'categories',
      value: 10
    }
  ]
  return (
    <div className='lg:w-[20rem] md:w-[15rem] h-full flex flex-col items-start bg-white py-4 px-6 text-base-700 rounded-md shadow w-60'>
      <Title text='Store Statistics' />
      <ul className='mt-8 flex flex-col gap-4'>
        {mockData.map((data) => (
          <li className='capitalize' key={uuidv4()}>
            <div className='lg:w-[16.5rem] md:w-[10rem] max-w-xs flex flex-row justify-between items-center py-2'>
              <span className='text-lg font-semibold'>
                <p className='text-sm text-base-400 font-normal'>
                  {data.title}
                </p>
                {data.value}
              </span>
              <span>
                {data.title === 'orders' ? (
                  <AiOutlineShopping />
                ) : data.title === 'customers' ? (
                  <HiOutlineUsers />
                ) : data.title === 'products' ? (
                  <FiBox />
                ) : (
                  <BiCategory />
                )}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
