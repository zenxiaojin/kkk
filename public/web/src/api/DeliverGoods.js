  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//发货/退货地址列表
export const orderList = data => fetch(httpurl+'biz/order/list', {
    method: 'post',
    body: 'orderStatus=3',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//物流公司查询
export const expressAdminList = data => fetch(httpurl+'biz/expressAdmin/list?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

export const orderSinglelmport = data => fetch(httpurl+'biz/order/singleImport', {
    method: 'post',
    credentials: 'include',
    body: 'orderId='+data.orderId+'&shipCompany='+data.shipCompany+'&shipCode='+data.shipCode+'&shipCompanyId='+data.shipCompanyId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

