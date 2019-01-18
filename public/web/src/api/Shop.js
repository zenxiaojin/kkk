  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//登录
export const storeApplyAdd = data => fetch(httpurl+'biz/storeApply/add', {
    method: 'POST',
    credentials: 'include',
    body: "storeName="+data.storeName+'&trueName='+data.trueName+'&sex='+data.sex+'&idNum='+data.idNum+'&cardNum='+data.cardNum+'&frontImg='+data.frontImg+'&idImg='+data.idImg+'&phone='+data.phone+'&emergency='+data.emergency+'&address='+data.address+'&addrDetail='+data.addrDetail+'&licenseImg='+data.licenseImg+'&commerceNum='+data.commerceNum,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

///图片


export const photoAdd = data => fetch(httpurl+'biz/photo/add', {
    method: 'POST',
    credentials: 'include',
    body: data
})

//审核状态

export const storeApplyApplyStatus = data => fetch(httpurl+'biz/storeApply/applyStatus', {
    method: 'POST',
    credentials: 'include',
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