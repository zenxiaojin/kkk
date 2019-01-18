// alipayAccount
// 	String 	支付宝账号 	Y 	 

// cnname
// 	String 	持有人姓名 	Y 	 

// bindingPhone
// 	String 	绑定手机 	Y 	 
// code 	String 	收到的验证二维码 	Y

//添加支付宝绑定
export const aliBindingAdd = data => fetch(httpurl+'biz/aliBinding/add', {
    method: 'post',
    credentials: 'include',
    body: 'alipayAccount='+data.alipayAccount+'&cnname='+data.cnname+'&bindingPhone='+data.bindingPhone+'&code='+data.code,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//获取验证码
export const aliBindingAddSend = data => fetch(httpurl+'biz/aliBinding/addSend', {
    method: 'post',
    credentials: 'include',
    body: 'mobile='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
