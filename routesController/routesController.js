const Utils = require(__basename + '/utils/utils.js');

const API = require(__basename + '/service/api.js');

const SQL = require(__basename + '/lib/sql/sql.js');

const common = require(__basename + '/common/common.js');

const moment = require('moment');

class RouteController {
	constructor () {}
	//短信验证码功能
	sendMessageController (req, res) {
		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		//req.query: 请求查询参数
		res.send(code)
		Utils.sendMessage(req.query.phone, code)
		// res.send(phone)
			.then((data) => {
		    let {Code} = data;
		    if (Code === 'OK') {
		       //处理返回参数
		       res.json({code: code, msg: '发送短信验证码成功', status: 1});
		    }
				}, (err) => {
		    	console.log(err);
		    	res.json({msg: '发送短信验证码失败', status: 0});
			})
	}

	//注册功能
	registerController (req, res) {
		//req.query 请求参数, GET请求携带参数

		//req.body 请求参数, POST请求携带参数
		// console.log('req.body ==> ', req.body);

		//查询手机号是否被注册
		let selectSQL = SQL.findOneSQL(req.body, 'phone');
		API.query(selectSQL)
			.then(result => {
				if (result[0].length === 1) {
					res.json(common.register.info);
				} else {
					//如果手机号没有被注册, 则执行插入sql语句
					Utils.addCrypto(req.body, 'pwd');
					let sql = SQL.registerSQL(req.body);
					API.query(sql)
						.then(data => {
							res.json(common.register.success);
						})
						.catch(err => {
							res.json(common.register.error);
						})
				}
			})
			.catch(err => {
				res.json(common.register.error);
			})

	}

	// 登录功能
	loginController (req, res) {
		// req.body {}
		// console.log('req.body===>',req.body)
		Utils.addCrypto(req.body, 'pwd');
		let sql = SQL.loginSQL(req.body);
		API.query(sql)
			.then(result => {
				if (result[0].length === 1) {
					// common.login.success.uid = result[0][0].uid;
					common.login.success.phone = result[0][0].phone;
					// common.login.success.nickname = result[0][0].nickname;
					let updatesql = SQL.updateLoginStatusSQL(req.body, 1);
					API.query(updatesql)
						.then(result => {
							res.json(common.login.success);
						})
						.catch(err => {
							
							res.json(common.login.info);

						})
				} else {
					res.json(common.login.info);
				}
			})
			.catch(err => {

				res.json(common.login.error);
			})
	}

	// //首页查询
	homeController (req, res) {
		let sqlArray = SQL.findHomeAllSQL();
		let data = {};
		let names = ['data']
		sqlArray.forEach((sql, i) => {
			API.query(sql)
				.then(result => {
					data[names[i]] = result[0];
					if (i == sqlArray.length - 1) {
						res.send(data);
					}
				})
				.catch(err => {
					res.send('出错啦');
				})
		})
	}



	// //首页nav查询
	navController (req, res) {
		let sqlArray = SQL.findHomenav();
		let data = {};
		let names = ['banner']
		sqlArray.forEach((sql, i) => {
			API.query(sql)
				.then(result => {
					data[names[i]] = result[0];
					if (i == sqlArray.length - 1) {
						res.send(data);
					}
				})
				.catch(err => {
					res.send('出错啦');
				})
		})
	}
	//产品详情
	productdetailController (req, res) {
		let sqlArray = SQL.findProductDetailSQL(req.query);
		let data = {};
		let names = ['productDetail', 'address'];
		sqlArray.forEach((sql, i) => {
			API.query(sql)
			.then(result => {
				data[names[i]] = result[0];
				if (i == names.length - 1) {
					res.send(data);
				}
			})
			.catch(err => {
				res.send(err);
			})
		})
		
	}

	//购物车
	shopcartController (req, res) {
		let time = new Date();
		time = moment(time).format('YYYY-MM-DD HH:mm:ss');
		req.query.addTime = time;
		// console.log(`格式化时间是: ${time}`);
		let sql = SQL.addShopcartSQL(req.query);
		API.query(sql)
			.then(result => {
				res.json({msg: '成功加入购物车', statusCode: 600});
			})
			.catch(err => {
				res.send('出错啦');
			})
	}

	emailcodeController (req, res) {
		//随机生成6位验证码
		let time = new Date().getTime().toString();
		let code = time.slice(time.length - 6);
		let sql = SQL.fineOneEmailSQL(req.query.email);
		API.query(sql)
			.then(result => {
				if (result[0].length == 1) {
					let options = {
						from: 'kangliuyong@126.com', //发件地址
						to: req.query.email, //收件地址
						subject: '修改密码', //主题标题
						text: '验证码',
						html: '<b>您的验证码是: ' + code + ',一切向您索取验证码都是骗子</b>' //邮件内容模板
					};
					Utils.sendEmail(options , () => {
						res.send({msg: '验证码已发至您的邮箱, 请注意查收!', statusCode: 700, validCode: code});
					})
				} else {
					res.json({msg: '该邮箱未被绑定', statusCode: 701})
				}
			})
			.catch(err => {
				res.send('出错啦')
			})
	}
	
	//修改密码
	modifypwdController (req, res) {
		Utils.addCrypto(req.body, 'pwd');
		let sql = SQL.modifyPwdSQL(req.body);
		API.query(sql)
			.then(result => {
				res.json({msg: '修改密码成功', statusCode: 800});
			})
			.catch(err => {
				res.send('出错啦');
			})
	}


	//统计
	AmountofaccessController (req,res) {
		let sql = SQL.AmountofaccessSQL();
		API.query(sql)
		.then(result => {
				res.json({msg: '增加成功', statusCode: 800});
			})
			.catch(err => {
				res.send('出错啦');
			})
			
	}

}

module.exports = new RouteController();