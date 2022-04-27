import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'normalize.css'
import './assets/css/index.less'
import { globalRegister } from './global'
import { Fold } from '@element-plus/icons-vue'
setupStore()
const app = createApp(App).use(store).use(router).use(globalRegister)
app.mount('#app')
