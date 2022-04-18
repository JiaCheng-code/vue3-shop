import HYRequest from './request'
import { BASE_URL, TIMEOUT } from './request/config'
import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token
      const token = localCache.getCache('token')
      if (token) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }
      console.log('请求成功')

      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败')

      return error
    },
    responseInterceptor: (res) => {
      console.log('响应成功')

      return res
    },
    responseInterceptorCatch: (error) => {
      console.log('响应失败')

      return error
    }
  }
})

export default hyRequest
