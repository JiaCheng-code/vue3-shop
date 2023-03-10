import { createStore, Store, useStore as useVuexStore } from 'vuex'
import { IRootState, IStoreType } from './type'
import loginModule from './login/login'
import systemModule from './main/system/system'
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
    loginModule,
    systemModule
  }
})
export function setupStore() {
  store.dispatch('loginModule/loadLocalLogin')
}
export function useStore(): Store<IStoreType> {
  return useVuexStore()
}
export default store
