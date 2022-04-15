<template>
  <div class="login-phone">
    <el-form
      ref="ruleFormRef"
      label-width="70px"
      class="demo-ruleForm"
      :model="phoneForm"
      :rules="phoneRules"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input placeholder="请输入手机号" v-model="phoneForm.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input placeholder="请输入验证码" v-model="phoneForm.code" />
          <el-button class="get-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRules } from '../config/phone-config'
export default defineComponent({
  name: 'loginPhone',
  setup() {
    const phoneForm = reactive({
      phone: '',
      code: ''
    })
    return {
      phoneForm,
      phoneRules
    }
  }
})
</script>
<style scoped lang="less">
.login-phone {
  .get-code {
    display: flex;
    .get-btn {
      margin-left: 8px;
    }
  }
}
</style>
