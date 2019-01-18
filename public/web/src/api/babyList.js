  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//列表查询
export const goodsList = data => fetch(httpurl+'biz/goods/list', {
    method: 'post',
    credentials: 'include',
     body: 'page='+data.page+'&pageSize=5'+'&goodsName='+data.goodsName+'&serial='+data.serial+'&leastPrice='+data.leastPrice+'&mostPrice='+data.mostPrice,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//下架商品接口staus：0:销售中 1:仓库中   2: 下架  3:删除
export const goodsUpdateStatus = data => fetch(httpurl+'biz/goods/updateStatus', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data.id+'&status=2'+'&version='+data.version,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

//删除商品接口staus：0:销售中 1:仓库中   2: 下架  3:删除
export const goodsUpdateStatuss = data => fetch(httpurl+'biz/goods/updateStatus', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data.id+'&status=3'+'&version='+data.version,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

//上架商品接口staus：0:销售中 1:仓库中   2: 下架  3:删除
export const goodsUpdateStatusss = data => fetch(httpurl+'biz/goods/updateStatus', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data.id+'&status=0'+'&version='+data.version,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})