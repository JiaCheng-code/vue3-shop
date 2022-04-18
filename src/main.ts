import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'

import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'

setupStore()

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
