import { EmailField } from '../../Elements/Inputs/EmailField'
import { Input } from '../../Elements/Inputs/Input'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'
import InformationDisplay from '../InformationDisplay'

export default function PersonalInformation(props) {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div>
        <h2 className='font-black text-2xl'>Informações Pessoais</h2>
        <p>Informações básicas de contato</p>
      </div>
      <div className='w-full flex flex-col gap-4 '>
        <div>
          <h3 className='w-full bg-light-200 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Dados de contato
          </h3>
          <div className='flex flex-col divide-y-2   px-2'>
            <InformationDisplay text='João Avelino' icon />
            <InformationDisplay text='joao.avelino@uni.cloud' icon />
            <InformationDisplay text='(XX) XXXXX-XXXX' icon />
            <InformationDisplay
              text='R. Nicola Pellanda, 5315, Umbará, Curitiba-PR'
              icon
            />
          </div>
        </div>
        <div className='py-4'>
          <h3 className='w-full bg-light-200 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Geral
          </h3>
          <InformationDisplay text={`Último logon: ${`02/07/2022`}`} />
          <InformationDisplay text={`Usuário desde: ${`02/07/2022`}`} />
        </div>
      </div>
    </div>
  )
}
