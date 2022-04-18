<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><user-filled /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRdf" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="phoneRdf" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="hanleLoginClick" class="login-btn"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserFilled, Cellphone } from '@element-plus/icons-vue'
import loginPhone from './login-phone.vue'
import loginAccount from './login-account.vue'

export default defineComponent({
  name: 'loginPanel',
  components: {
    UserFilled,
    Cellphone,
    loginPhone,
    loginAccount
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRdf = ref<InstanceType<typeof loginAccount>>()
    const phoneRdf = ref<InstanceType<typeof loginPhone>>()
    const currentTab = ref<string>('account')
    const hanleLoginClick = () => {
      if (currentTab.value === 'account') {
        accountRdf.value?.loginAction(isKeepPassword.value)
        console.log('登录了')
      } else {
        console.log('手机登录')
      }
    }
    return {
      isKeepPassword,
      hanleLoginClick,
      accountRdf,
      currentTab
    }
  }
})
</script>
<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;
  .title {
    text-align: center;
  }
  .custom-tabs-label {
    .el-icon {
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
  }
  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
