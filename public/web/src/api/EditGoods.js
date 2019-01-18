  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//增加类目
export const goodstypeAdd = data => fetch(httpurl+'admin/goodstype/add', {
    method: 'POST',
    credentials: 'include',
    body: 'name='+data.name+'&parentId='+data.parentId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//类目列表
export const goodstypeList = data => fetch(httpurl+'biz/goodstype/list', {
    method: 'post',
    credentials: 'include',
    body: 'parentId='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//类目修改
export const goodstypeUpdate = data => fetch(httpurl+'admin/goodstype/update', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data.id+'&name='+data.name,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//新增属性接口：
export const goodsspecificationAdd = data => fetch(httpurl+'admin/goodsspecification/add', {
    method: 'post',
    credentials: 'include',
    body: 'sequence='+data.sequence+'&propertyStr='+data.propertyStr+'&name='+data.name+'&type='+data.type+'&valueType='+data.valueType+'&typeId='+data.typeId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//属性列表查询
export const goodsspecificationList = data => fetch(httpurl+'admin/goodsspecification/list', {
    method: 'post',
    credentials: 'include',
    body: 'typeId='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询属性详细信息
export const goodsspecificationGet = data => fetch(httpurl+'admin/goodsspecification/get', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//修改属性名称
export const goodsspecificationUpdate = data => fetch(httpurl+'admin/goodsspecification/update', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data.id+'&name='+data.name,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除属性
export const goodsspecificationDelete = data => fetch(httpurl+'admin/goodsspecification/delete', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//属性值添加接口：
export const goodsspecificationAddS = data => fetch(httpurl+'admin/goodsspecification/add', {
    method: 'post',
    credentials: 'include',
    body: 'sequence='+data.sequence+'&propertyStr='+data.propertyStr+'&name='+data.name+'&type='+data.type+'&valueType='+data.valueType+'&typeId='+data.typeId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//添加属性值
export const goodsspecpropertyAdd = data => fetch(httpurl+'admin/goodsspecproperty/add', {
    method: 'post',
    credentials: 'include',
    body: 'value='+data.value+'&specId='+data.specId,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//修改属性值

export const goodsspecpropertyUpdate = data => fetch(httpurl+'admin/goodsspecproperty/update', {
    method: 'post',
    credentials: 'include',
    body: 'value='+data.value+'&specId='+data.specId+'&id='+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除属性值/
export const goodsspecpropertyDelete = data => fetch(httpurl+'admin/goodsspecproperty/delete', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})