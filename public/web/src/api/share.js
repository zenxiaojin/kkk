// const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//分享列表
export const worldList = data => fetch(httpurl+'admin/friendCircle/worldList?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//分享详情
export const friendCircleDetail = data => fetch(httpurl+'admin/friendCircle/detail', {
    method: 'post',
    credentials: 'include',
    body: "id="+data.id,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除分享
export const friendCircleDelete = data => fetch(httpurl+'admin/friendCircle/delete', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//分享评论列表
export const commentList = data => fetch(httpurl+'admin/comment/list', {
    method: 'post',
    credentials: 'include',
    body: "topicId="+data.id+'&page='+data.page+'&pageSize='+10,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除分享评论
export const commentDelete = data => fetch(httpurl+'admin/comment/delete', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})