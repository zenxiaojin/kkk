  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
  // const httpurl = 'https://kungshi.com/vfadmin/';
//退款列表查询
export const goodsReturnList = data => fetch(httpurl+'biz/goodsReturn/list?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//退款列表根据条件查询
export const goodsReturnListb = data => fetch(httpurl+'biz/goodsReturn/list?page='+data.page+"&pageSize="+10+'&returnStatus='+data.returnStatus, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//
export const goodsReturnUnFinishCount = data => fetch(httpurl+'biz/goodsReturn/unFinishCount?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//支付宝退款
export const alipayRefund = data => fetch(httpurl+'biz/alipay/refund', {
    method: 'post',
    credentials: 'include',
    body: 'orderId='+data.orderId+'&goodsId='+data.goodsId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

//微信
export const wxRefund = data => fetch(httpurl+'wx/refund', {
    method: 'post',
    credentials: 'include',
    body: 'orderId='+data.orderId+'&goodsId='+data.goodsId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//银联
export const unionRefund = data => fetch(httpurl+'union/refund', {
    method: 'post',
    credentials: 'include',
    body: 'orderId='+data.orderId+'&goodsId='+data.goodsId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//同意买家退货退款
export const goodsReturnConfirm = data => fetch(httpurl+'biz/goodsReturn/confirm', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})