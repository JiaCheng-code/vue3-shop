<template>
  <div class="nav-header">
    <el-icon class="fold-menu" size="24px" @click="handleFoldChange"
      ><expand v-if="isFold" /><fold v-else
    /></el-icon>
    <div class="content">
      <navBreadcrumb :breadcrumbs="breadcrumb"></navBreadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import navBreadcrumb, { IBreadcrumbs } from '@/base-ui/breadcrumb'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  name: 'navHeader',
  emits: ['foldChange'],
  components: {
    userInfo,
    navBreadcrumb
  },
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldChange = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    const store = useStore()
    const breadcrumb = computed(() => {
      const route = useRoute()
      const currentPath = route.path
      const userMenus = store.state.loginModule.userMenus
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    return {
      isFold,
      handleFoldChange,
      breadcrumb
    }
  }
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    flex: 1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
