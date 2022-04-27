import { getPageListData } from '@/service/main/system/system'
import { IRootState } from '@/store/type'
import { Module } from 'vuex'
import { ISystemState } from './types'
const pageUrlMap = {
  user: '/users/list',
  role: '/role/list'
}
const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, userList: any[]) {
      state.userList = userList
    },
    changeUserCount(state, userCount: number) {
      state.userCount = userCount
    },
    changeRoleList(state, roleList: any[]) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      const pageName = payload.pageName
      // 1.发送请求
      console.log(payload)

      const pageResult = await getPageListData(
        pageUrlMap[pageName],
        payload.queryInfo
      )
      const { list, totalCount } = pageResult.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}Count`, totalCount)
      commit(`change${changePageName}List`, list)
    }
  }
}
export default systemModule
