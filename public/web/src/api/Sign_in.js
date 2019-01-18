  // const httpurl ='https://ai.vifitting.com/vfadmin/'
  // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//登录
export const loginByUsername = data => fetch(httpurl+'login', {
    method: 'post',
    credentials: 'include',
    body: "phone="+data.mobile+"&pwd="+data.password,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//退出登录
export const Exitlogon = data => fetch(httpurl+'biz/usr/exit', {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//判断是否登录
export const isLogin = data => fetch(httpurl+'biz/usr/isLogin', {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

