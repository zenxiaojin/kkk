  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//添加发货/退货地址公司
export const sellerReturnAddressAdd = data => fetch(httpurl+'biz/sellerReturnAddress/add', {
    method: 'POST',
    credentials: 'include',
     body: "consignee="+data.consignee+'&county='+data.county+'&city='+data.city+'&province='+data.province+'&deliveryAddress='+data.deliveryAddress+'&postalCode='+data.postalCode+'&telephone='+data.telephone+'&contactPhone='+data.contactPhone+'&company='+data.company,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//省三级联动

export const transAreaGetProvinceArea = data => fetch(httpurl+'biz/transArea/getProvinceArea', {
    method: 'post',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//市三级联动

export const transAreaGetCityArea = data => fetch(httpurl+'biz/transArea/getCityArea', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//区
export const transAreaGetDistrictArea = data => fetch(httpurl+'biz/transArea/getDistrictArea', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})



//发货/退货地址列表
export const sellerReturnAddressList = data => fetch(httpurl+'biz/sellerReturnAddress/list?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//删除发货退货地址
export const sellerReturnAddressDelete = data => fetch(httpurl+'biz/sellerReturnAddress/delete', {
    method: 'POST',
    credentials: 'include',
    body: "id="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//更改发货退货地址
export const sellerReturnAddressUpdate = data => fetch(httpurl+'biz/sellerReturnAddress/update', {
    method: 'POST',
    credentials: 'include',
    body: 'consignee='+data.consignee+'&id='+data.id+'&county='+data.county+'&city='+data.city+'&province='+data.province+'&deliveryAddress='+data.deliveryAddress+'&postalCode='+data.postalCode+'&telephone='+data.telephone+'&contactPhone='+data.contactPhone+'&company='+data.company,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//˙设置默认发货退货地址id = 9,isDefaultDelivery =1 
export const sellerReturnAdd_s = data => fetch(httpurl+'biz/sellerReturnAddress/update', {
    method: 'POST',
    credentials: 'include',
    body: 'isDefaultDelivery='+data.isDefaultDelivery+'&id='+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//˙设置默认发货退货地址id = 9,isDefaultReturn =1 
export const sellerReturnAdd_a = data => fetch(httpurl+'biz/sellerReturnAddress/update', {
    method: 'POST',
    credentials: 'include',
    body: 'isDefaultReturn='+data.isDefaultReturn+'&id='+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询运费模板列表
export const transportList = data => fetch(httpurl+'biz/transport/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//添加运费模板
export const transportAdd = data => fetch(httpurl+'biz/transport/add', {
    method: 'POST',
    credentials: 'include',
    body: "isFreeMail="+data.isFreeMail+'&mailInfo='+data.mailInfo+'&expressInfo='+data.expressInfo+'&emsInfo='+data.emsInfo+'&transName='+data.transName+'&storeId='+data.storeId+'&transTime='+data.transTime+'&transType='+data.transType,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除运费模板
export const transportDelete = data => fetch(httpurl+'biz/transport/delete', {
    method: 'POST',
    credentials: 'include',
    body: "id="+data.id+'&version='+data.version,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询运费模板
export const transportSelectById = data => fetch(httpurl+'biz/transport/selectById', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//修改运费模板
export const transportUpdate = data => fetch(httpurl+'biz/transport/update', {
    method: 'POST',
    credentials: 'include',
    body: "isFreeMail="+data.isFreeMail+'&id='+data.id+'&mailInfo='+data.mailInfo+'&expressInfo='+data.expressInfo+'&emsInfo='+data.emsInfo+'&transName='+data.transName+'&storeId='+data.storeId+'&transTime='+data.transTime+'&transType='+data.transType,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//订单跟踪
export const expressCompanyExpressTracking = data => fetch(httpurl+'biz/expressCompany/expressTracking', {
    method: 'post',
    credentials: 'include',
    body: "orderId="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})