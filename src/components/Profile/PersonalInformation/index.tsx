import { EmailField } from '../../Elements/Inputs/EmailField'
import { Input } from '../../Elements/Inputs/Input'
import { PhoneInput } from '../../Elements/Inputs/PhoneInput'

export default function PersonalInformation(props) {
  return (
    <div className='w-full flex flex-col gap-8'>
      <div>
        <h2 className='font-black text-2xl'>Informações Pessoais</h2>
        <p>Informações básicas de contato</p>
      </div>
      <form action='' className='w-full flex flex-col gap-4 '>
        <fieldset className='py-4'>
          <legend className='w-full bg-light-200 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Dados de contato
          </legend>
          <Input placeholder='João Avelino' label='Nome Completo' />
          <EmailField placeholder='joao.avelino@uni.cloud' label='Email' />
          <PhoneInput placeholder='Telefone' label='(XX) XXXXX-XXXX' />
          <Input placeholder='Endereço' label='Endereço completo' />
        </fieldset>
        <fieldset className='py-4'>
          <legend className='w-full bg-light-200 p-4 py-1 rounded-sm uppercase font-black text-sm'>
            Geral
          </legend>
          <Input placeholder='01/07/2022' label='Último logon' />
          <Input placeholder='01/07/2022' label='Usuário desde' />
        </fieldset>
      </form>
    </div>
  )
}
