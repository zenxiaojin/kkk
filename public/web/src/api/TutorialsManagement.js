 // const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//教程列表
export const courseList = data => fetch(httpurl+'admin/course/list', {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//
export const waittingCheckList = data => fetch(httpurl+'admin/course/waittingCheckList', {
    method: 'GET',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})

//教程详情
export const courseDetail = data => fetch(httpurl+'admin/course/detail', {
    method: 'POST',
    credentials: 'include',
    body: "id="+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//教程审核======> 通过
export const coursEaudit = data => fetch(httpurl+'admin/course/audit', {
    method: 'POST',
    credentials: 'include',
    body: "status=O"+'&id='+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//教程审核======> 拒绝
export const coursEauditNO = data => fetch(httpurl+'admin/course/audit', {
    method: 'POST',
    credentials: 'include',
    body: "status=R"+'&id='+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除教程
export const courseDelete = data => fetch(httpurl+'admin/course/delete', {
    method: 'POST',
    credentials: 'include',
    body: 'ids='+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//教程评论列表
export const courseCommentList = data => fetch(httpurl+'admin/courseComment/list', {
    method: 'post',
    credentials: 'include',
    body: 'topicId='+data.id+'&page='+data.page+'&pageSize='+10,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "Content-Type": "application/x-www-form-urlencoded"
  }
})
//教程分享评论列表
export const commentList = data => fetch(httpurl+'admin/comment/list', {
    method: 'post',
    credentials: 'include',
    body: "topicId="+data.id+'&page='+data.page+'&pageSize='+10,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除教程评论
export const courseCommentDelete = data => fetch(httpurl+'admin/courseComment/delete', {
    method: 'post',
    credentials: 'include',
    body: 'id='+data,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})