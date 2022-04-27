<template>
  <div class="page-content">
    <hy-table :listData="userList" v-bind="contentTableConfig">
      <template #headerHandler>
        <el-button type="primary" size="">新增用户</el-button>
      </template>
      <template #enable="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable ? 'success' : 'danger'"
          >{{ scope.row.enable ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        {{ $filters.formatTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filters.formatTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button size="small" type="text">编辑</el-button>
          <el-button size="small" type="text">删除</el-button>
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import hyTable from '@/base-ui/table'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'pageContent',
  components: {
    hyTable
  },
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('systemModule/getPageListAction', {
      pageName: props.pageName,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() =>
      store.getters[`systemModule/pageListData`](props.pageName)
    )
    const userCount = computed(() => store.state.systemModule.userCount)
    return {
      userList
    }
  }
})
</script>
<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 1px solid #f5f5f5;
}
</style>
