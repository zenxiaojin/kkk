//查询银行接口查询银行卡接口
export const withdrawList = data => fetch(httpurl+'biz/withdrawBank/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//银行卡删除接口、
export const withdrawDelete = data => fetch(httpurl+'biz/withdrawBank/delete', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//查询银行列表
export const bankList = data => fetch(httpurl+'biz/bank/list', {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//添加银行卡
export const withdrawAdd = data => fetch(httpurl+'biz/withdrawBank/add', {
    method: 'post',
    credentials: 'include',
    body: 'cnname='+data.cnname+'&bankName='+data.bankName+'&bankNumber='+data.bankNumber+'&personId='+data.personId+'&bankPhone='+data.bankPhone,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//发送验证码
export const withdrawBankUpdateSend = data => fetch(httpurl+'biz/withdrawBank/updateSend', {
    method: 'post',
    credentials: 'include',
    body: 'mobile='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//填写验证码验证是否正确
export const withdrawBankUpdateValidate = data => fetch(httpurl+'biz/withdrawBank/updateValidate', {
    method: 'post',
    credentials: 'include',
    body: 'mobile='+data.mobile+'&code='+data.code,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//修改银行卡信息 
export const withdrawBankUpdateBankInfo = data => fetch(httpurl+'biz/withdrawBank/updateBankInfo', {
    method: 'post',
    credentials: 'include',
    body: 'bankName='+data.bankName+'&bankNumber='+data.bankNumber+'&cnname='+data.cnname,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
