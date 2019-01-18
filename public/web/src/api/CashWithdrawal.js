//申请提现
export const withdrawalAdd = data => fetch(httpurl+'biz/withdrawal/add', {
    method: 'post',
    credentials: 'include',
    body: 'withdrawType='+data.withdrawType+'&bindingPhone='+data.bindingPhone+'&withdrawAccount='+data.withdrawAccount+'&withdrawApplyTotal='+data.withdrawApplyTotal+'&code='+data.code,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

//查询支付宝绑定
//退款列表查询
export const aliBindingQuery = data => fetch(httpurl+'biz/aliBinding/query', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//获取验证码
export const withdrawalWithdrawalSend = data => fetch(httpurl+'biz/withdrawal/withdrawalSend', {
    method: 'post',
    credentials: 'include',
    body: 'mobile='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})