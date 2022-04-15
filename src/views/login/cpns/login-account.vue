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
          type="password"
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

export default defineComponent({
  name: 'loginAccount',
  setup() {
    const ruleFormRef = ref<FormInstance>()
    const account = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      ruleFormRef.value?.validate((valid) => {
        if (valid) {
          console.log('登录中')
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
