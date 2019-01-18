  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//注册验证码
export const usrRegiSend = data => fetch(httpurl+'message', {
    method: 'post',
    credentials: 'include',
    body: "phone="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//注册
export const usrRegister = data => fetch(httpurl+'register', {
    method: 'POST',
    credentials: 'include',
     body: "phone="+data.mobile+"&code="+data.code+"&pwd="+data.password,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
