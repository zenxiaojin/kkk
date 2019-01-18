// 订单列表接口：/

export const orderList = data => fetch(httpurl+'biz/order/list?page='+data+"&pageSize="+10, {
    method: 'post',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})


export const orderLists = data => fetch(httpurl+'biz/order/list', {
    method: 'post',
    body: 'page='+data.page+'&pageSize=10'+'&nickName='+data.nickName+'&evaluationStatus='+data.evaluationStatus+'&orderStatus='+data.orderStatus+'&orderId='+data.orderId,
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})