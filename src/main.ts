import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
interface DataType {
  data: any
  returnCode: string
  success: boolean
}
hyRequest
  .get<DataType>({
    url: '/home/multidata'
  })
  .then((res) => {
    console.log(res)
  })
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
