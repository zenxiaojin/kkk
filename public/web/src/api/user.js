  // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//初始化数据
export const Users = data => fetch(httpurl+'admin/usr/list?page=1&pageSize=10', {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//冻结用户账号
export const Userfrozen = data => fetch(httpurl+'admin/usr/frozen', {
    method: 'POST',
    credentials: 'include',
    body: "id="+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//解冻用户账号
export const usrUnFrozen = data => fetch(httpurl+'admin/usr/unFrozen', {
    method: 'POST',
    credentials: 'include',
    body: "id="+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})