<template>
  <div><h2>404</h2></div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted
} from 'vue'
export default defineComponent({
  name: 'notFound',
  setup() {
    const data = reactive({})
    onBeforeMount(() => {
      //2.组件挂载页面之前执行----onBeforeMount
    })
    onMounted(() => {
      //3.组件挂载到页面之后执行-------onMounted
    })
    return {
      ...toRefs(data)
    }
  }
})
</script>
<style scoped lang="less"></style>
