export interface CreateContractFormProps {}

export type CreateContractType = {
  name: string
  start_date: string
  end_date: string
  term: string
  readjust_cycle: string
  amount: string
  note?: string
  customer_id: string
  intermediary: string
  contract?: string
}
