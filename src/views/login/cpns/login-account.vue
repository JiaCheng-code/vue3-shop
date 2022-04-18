<template>
  <div class="login-account">
    <el-form
      ref="ruleFormRef"
      label-width="70px"
      class="demo-ruleForm"
      :model="account"
      :rules="rules"
    >
      <el-form-item label="账号" prop="name">
        <el-input placeholder="请输入账号" v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          show-password
          placeholder="请输入密码"
          v-model="account.password"
          autocomplete="off"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'
import store from '@/store'

export default defineComponent({
  name: 'loginAccount',
  setup() {
    const store = useStore()
    const ruleFormRef = ref<FormInstance>()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const loginAction = (iskeeppassword: boolean) => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          // 1.判断是否记住密码
          if (iskeeppassword) {
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          // 2.开始进行登录验证
          store.dispatch('loginModule/accountLoginAction', { ...account })
        }
      })
    }
    return {
      ruleFormRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>
<style scoped lang="less"></style>
