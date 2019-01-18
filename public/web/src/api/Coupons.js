//优惠劵创建
export const couponAdd = data => fetch(httpurl+'biz/coupon/add', {
    method: 'post',
    credentials: 'include',
    body: 'limit='+data.limit+'&type='+data.type+'&amount='+data.amount+'&beginTime='+data.beginTime+'&count='+data.count+'&endTime='+data.endTime+'&name='+data.name+'&amountAvailable='+data.amountAvailable+'&goods='+data.goods,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

//商品列表
export const goodsLists = data => fetch(httpurl+'biz/goods/list', {
    method: 'post',
    credentials: 'include',
     body: 'page='+data.page+'&pageSize=10'+'&goodsName='+data.goodsName+'&serial='+data.serial+'&leastPrice='+data.leastPrice+'&mostPrice='+data.mostPrice,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//优惠劵列表
export const couponList = data => fetch(httpurl+'biz/coupon/list', {
    method: 'post',
    credentials: 'include',
     body: 'page='+data+'&pageSize=10',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//修改优惠卷
export const couponUpdate = data => fetch(httpurl+'biz/coupon/update', {
    method: 'post',
    credentials: 'include',
    body: 'limit='+data.limit+'&type='+data.type+'&version='+data.version+'&id='+data.id+'&amount='+data.amount+'&beginTime='+data.beginTime+'&count='+data.count+'&endTime='+data.endTime+'&name='+data.name+'&amountAvailable='+data.amountAvailable+'&goods='+data.goods,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除优惠劵
export const couponDelete = data => fetch(httpurl+'biz/coupon/delete', {
    method: 'post',
    credentials: 'include',
     body: 'id='+data.id+'&version='+data.version,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//优惠劵详细
export const couponDetail = data => fetch(httpurl+'biz/coupon/detail', {
    method: 'post',
    credentials: 'include',
     body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})