// const httpurl ='https://ai.vifitting.com/vfadmin/'
 // const httpurl = 'http://192.168.100.126:8080/eryuan-vfmall-businessManage/';
 // const httpurl = 'https://kungshi.com/vfadmin/';
//提问列表
export const questionsWholeList = data => fetch(httpurl+'admin/questions/wholeList?page='+data+"&pageSize="+10, {
    method: 'get',
    credentials: 'include',
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//提问详情
export const questionsDetail = data => fetch(httpurl+'admin/questions/detail', {
    method: 'post',
    credentials: 'include',
    body: "id="+data.id,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//删除提问
export const questionsDelete = data => fetch(httpurl+'admin/questions/delete', {
    method: 'post',
    credentials: 'include',
    body: "ids="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
//提问评论列表
export const questionCommentList = data => fetch(httpurl+'admin/questionComment/list', {
    method: 'post',
    credentials: 'include',
    body: "topicId="+data.id+'&page='+data.page+'&pageSize='+10,
    headers: {
    "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})
// 删除提问评论
export const questionCommentDelete = data => fetch(httpurl+'admin/questionComment/delete', {
    method: 'post',
    credentials: 'include',
    body: "id="+data,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
    "Content-Type": "application/x-www-form-urlencoded"
  }
})