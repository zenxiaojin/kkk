//修改属性值

export const accountDetailList = data => fetch(httpurl+'biz/accountDetail/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询店铺账户及提现金额信息
export const storeQueryAccountlnfo = data => fetch(httpurl+'biz/store/queryAccountInfo', {
    method: 'post',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})