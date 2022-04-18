import { createStore } from 'vuex'
import { IRootState } from './type'
import loginModule from './login/login'
const store = createStore<IRootState>({
  state() {
    return {
      name: 'coderwhy',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginModule
  }
})
export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default store
