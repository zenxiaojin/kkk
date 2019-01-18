 // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';

//商品详情
export const goodsFindForUpdate = data => fetch(httpurl+'biz/goods/findForUpdate', {
    method: 'POST',
    credentials: 'include',
    body: 'goodsId='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//商品修改
export const goodsUpdate = data => fetch(httpurl+'biz/goods/update', {
    method: 'POST',
    credentials: 'include',
     body: "status="+data.status+'&guarantee='+data.guarantee+'&delPhoto='+data.delPhoto+'&delProperty='+data.delProperty+'&delSku='+data.delSku+'&id='+data.id+'&version='+data.version+'&details='+data.details+'&inventory='+data.inventory+'&goodsName='+data.goodsName+'&price='+data.price+'&currentPrice='+data.currentPrice+'&serial='+data.serial+'&storeRecommend='+data.storeRecommend+'&typeId='+data.typeId+'&brandId='+data.brandId+'&mainPhoto='+data.mainPhoto+'&photos='+data.photos+'&transportId='+data.transportId+'&basePropertys='+data.basePropertys+'&salePropertys='+data.salePropertys+'&skus='+data.skus,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})


//快递公司logo上传

export const photoAddsss = data => fetch(httpurl+'biz/photo/add', {
    method: 'POST',
    credentials: 'include',
    body: data
})


//属性添加

export const goodsPropertyAddOnes = data => fetch(httpurl+'biz/goodsProperty/addOne', {
    method: 'post',
    credentials: 'include',
    body: 'specId='+data.specId+'&propertyValue='+data.propertyValue,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})


//删除属性值

export const goodsPropertyDelOnes = data => fetch(httpurl+'biz/goodsProperty/delOne', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询运费模板
export const transportLists = data => fetch(httpurl+'biz/transport/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//品牌查询

export const goodsBrandAdminLists = data => fetch(httpurl+'biz/goodsBrandAdmin/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

