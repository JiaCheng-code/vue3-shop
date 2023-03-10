export interface IAccount {
  name: string
  password: string
}
export interface ILoginResult {
  id: number
  token: string
  name: string
}
export interface IDataType<T = any> {
  code: number
  data: T
}
