/*
	protocal => agree
		100: 同意协议
		101: 不同意协议
*/
module.exports = {

	protocal: {
		agree: 101
	},

	register: {
		success: {
			msg: '注册成功',
			statusCode: 200
		},
		info: {
			msg: '该手机号已被注册',
			statusCode: 201
		},
		error: {
			msg: '注册失败',
			statusCode: 202
		}
	},

	login: {
		success: {
			msg: '登录成功',
			statusCode: 300
		},
		info: {
			msg: '用户名或者密码错误',
			statusCode: 301
		},
		error: {
			msg: '登录失败',
			statusCode: 302
		}
	}
}










// $scope.register=function(){
// 			$scope.userinfo.time = formatTime.format(new Date(),'yyyy-MM-dd hh:mm:ss.S')
// 			console.log("$scope.userinfo.time==>",$scope.userinfo.time)
			
// 			API.fetchPost('http://127.0.0.1:9000/register',$scope.userinfo)
// 			.then(function(data){
// 				console.log('data===>',data.data.msg)
// 				if(data.data.statusCode==201 || data.data.statusCode==202){tip.showTip(data.data.msg);}else{
// 					$state.go("Sign_in")
// 				}
// 			})
// 			.catch(function(err){
// 					console.log('err==>',err)
// 			})	

// 			if(!isValid()){return}else{$scope.userinfo.butt=true;}
// 		}