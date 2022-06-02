import { v4 as uuidv4 } from 'uuid'
import { AiOutlineShopping } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { FiBox } from 'react-icons/fi'
import { BiCategory } from 'react-icons/bi'

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
    <div className='grid place-content-center bg-white p-4 text-base-700 rounded-md shadow'>
      <h3 className='font-semibold text-lg'>Store Statistics</h3>
      <ul>
        {mockData.map((data) => (
          <li className='' key={uuidv4()}>
            <div>
              <span>
                <p>{data.title}</p>
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
