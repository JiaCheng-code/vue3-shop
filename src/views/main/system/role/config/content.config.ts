export const contentTableConfig = {
  title: '角色列表',
  pageName: 'role',
  showSelectColumn: true,
  showIndexColumn: true,
  propList: [
    { prop: 'name', label: '角色名', minWidth: '100' },
    { prop: 'intro', label: '权限介绍', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '220',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '220',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidh: '150',
      fixed: 'right',
      slotName: 'handler'
    }
  ]
}
