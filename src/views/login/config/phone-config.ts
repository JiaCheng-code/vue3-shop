export const phoneRules = {
  phone: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '手机号必须是5~10个字母或者数字',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      min: 4,
      max: 4,
      message: '验证码长度为4位',
      trigger: 'blur'
    }
  ]
}
