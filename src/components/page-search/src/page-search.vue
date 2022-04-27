<template>
  <hy-from-item v-bind="searchFormConfig" v-model="formData">
    <template #header>
      <h1>高级检索</h1>
    </template>
    <template #footer>
      <el-button>重置</el-button>
      <el-button type="primary">搜索</el-button>
    </template>
  </hy-from-item>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HyFromItem from '@/base-ui/from'
export default defineComponent({
  name: 'pageSearch',
  components: {
    HyFromItem
  },
  props: {
    searchFormConfig: {
      type: Object,
      require: true
    }
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>
<style scoped lang="less"></style>
