<template>
  <div class="user">
    <div class="search">
      <hy-from-item v-bind="formConfig"></hy-from-item>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyFromItem from '@/base-ui/from'
import { formConfig } from './config/search.config'
export default defineComponent({
  components: {
    HyFromItem
  },
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped lang="less"></style>
