class SQL {

	constructor() {}

	//注册
	registerSQL(o) {
		return "INSERT INTO `t_user` (`pwd`, `phone`) VALUES ('" + o.pwd + "','" + o.phone + "')";
	}

	//查询t_user表一个字段信息
	findOneSQL(o, field) {
		return "SELECT `" + field + "` FROM `t_user` WHERE `" + field + "` = '" + o[field] + "'";
	}

	//登录
	loginSQL(o) {
		return "SELECT `phone`, `pwd` FROM `t_user` WHERE `phone` = '" + o.phone + "' AND `pwd` = '" + o.pwd + "'";
	}

	//修改t_user loginStatus字段 0: 离线, 1: 在线
	updateLoginStatusSQL (o, val) {
		return "UPDATE `t_user` SET `loginStatus` = " + val + " WHERE `phone` = '" + o.phone + "'";
	}

	//首页查询
	findHomeAllSQL() {
		return [
			"SELECT * FROM `t_banner` "
		];
	}
	//首页导航nav查询
	findHomenav() {
		return [
			"SELECT * FROM `nav` "
		];
	}

	// 查询产品详情
	findProductDetailSQL (o) {
		return [
			"SELECT * FROM `t_productdetail` WHERE `pid` = " + o.id,
			"SELECT * FROM `t_address` WHERE `uid` = " + o.uid + " AND `defaultAddress` = 1"
		]
	}

	//加入购物车
	addShopcartSQL (o) {
		return "INSERT INTO `t_shopcart` (`pid`, `name`, `price`, `code`, `count`, `imgurl`, `uid`, `phone`, `nickname`, `addTime`) VALUES (" + o.pid + ",'" + o.name + "','" + o.price + "','" + o.code +"','" + o.count + "','" + o.imgurl + "','" + o.uid + "','" + o.phone + "','" + o.nickname + "','" + o.addTime + "')";
	}

	//查询用户邮箱
	fineOneEmailSQL (email) {
		return "SELECT `email` FROM `t_user` WHERE `email` = '" + email + "'";
	}

	//修改用户密码
	modifyPwdSQL (o) {
		return "UPDATE `t_user` SET `pwd` = '" + o.pwd + "' WHERE `email` = '" + o.email +"'"; 
	}

	//统计
	AmountofaccessSQL () {
		// return	"UPDATE `Amountofaccess` SET `frequency`=`frequency` +1 "
		return "update `Amountofaccess` set `frequency`=`frequency`+1 where `cid`=1"; 
	}


}

module.exports = new SQL();