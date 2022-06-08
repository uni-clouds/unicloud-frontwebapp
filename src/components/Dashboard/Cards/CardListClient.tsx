import { v4 as uuidv4 } from 'uuid'
import { FaCircle } from 'react-icons/fa'
import { Title } from '../../Elements/TitleDashboard'

export const CardListClient: React.FC = () => {
  const mockData = [
    // {
    //   client: 'Daquan Hester',
    //   active: true
    // },
    // {
    //   client: 'Thane Whitehead',
    //   active: true
    // },
    {
      client: 'Yardley Mccarthy',
      active: false
    },
    {
      client: 'Barbara Glover',
      active: true
    },
    {
      client: 'Carlos Grimes',
      active: true
    },
    {
      client: 'Russel Hunter',
      active: false
    },
    {
      client: 'Jhon Doe',
      active: true
    },
    {
      client: 'Vernon Church',
      active: true
    },
    {
      client: 'Cally Wilcox',
      active: false
    },
    {
      client: 'Tara Perkins',
      active: true
    },
    {
      client: 'Fredie Mercury',
      active: false
    }
  ]
  return (
    <div className='lg:w-[20rem] md:w-[15rem] h-full flex flex-col items-start bg-white py-4 px-6 rounded-md shadow w-60'>
      <Title text='Parceiros' />
      <ul className='mt-6 flex flex-col gap-3'>
        {mockData.map((data) => (
          <li className='capitalize' key={uuidv4()}>
            <div className='lg:w-[16.5rem] md:w-[10rem] max-w-xs flex flex-row justify-between items-center py-2'>
              <p className='text-sm font-normal'>{data.client}</p>
              <span>
                <FaCircle
                  className={`text-[0.6rem] ${
                    data.active === true ? 'text-teal-custom' : 'text-rose-400'
                  } `}
                />
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
