type IFormType = 'input' | 'password' | 'select' | 'datepicker'
export interface IFromItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder: any
  option?: any[]
  otherOptions?: any
  itemStyle?: any[]
}

export interface IForm {
  formItem: IFromItem[]
  labelWidth?: string
  colLayout?: any
  itemStyle?: any
}
