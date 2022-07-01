import { Avatar } from '../Avatar'
import { MdMoreVert } from 'react-icons/md'

const Profile: React.FC = () => {
  return (
    <div className='flex flex-1'>
      <div className='flex flex-col w-96'>
        <section className='flex justify-between w-full p-8 gap-4 bg-red-300 '>
          <Avatar firstName='Joao' lastName='Avelino' />
          <div className='flex-1'>
            <h3>João Avelino</h3>
            <h4>joao.avelino@uni.cloud</h4>
          </div>
          <button>
            <MdMoreVert />
          </button>
        </section>
        <section className='flex w-full p-8 bg-green-300 '>
          <h3>Empresa</h3>
        </section>
        <section className='flex flex-1 w-full p-8 bg-blue-300'>
          <h3>Navigation</h3>
        </section>
      </div>
      <section className='flex flex-col flex-1 p-8 bg-yellow-200'>
        <h3>Main Part</h3>
      </section>
    </div>
  )
}
export default Profile
