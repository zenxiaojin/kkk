# serverguole
guo le app server

post请求体解析模块
body-parser
//json化post请求数据
app.use(bodyParser.json());

crypto 加密模块

nodemailer 发邮件模块

moment 时间格式化模块
moment(v.buyTime).format('YYYY-MM-DD');
moment(v.buyTime).format('YYYY-MM-DD hh:mm:ss');
moment(v.buyTime).format('YYYY-MM-DD HH:mm:ss');

场景值
	登录
		loginStatus
			0: 离线
			1: 在线


产品表


http://127.0.0.1:9000/images/

发邮件

let nodemailer = require('nodemailer');

let mailOptions = {
		from: 'kangliuyong@126.com', //发件地址
		to: req.query.email, //收件地址
		subject: '修改密码', //主题标题
		text: '验证码',
		html: '<b>您的验证码是: ' + randomCode + '</b>' //邮件内容模板
};

let transporter = nodemailer.createTransport({
  host: 'smtp.126.com', //主机地址
  port: 25, //端口
  auth: {
    user: 'kangliuyong@126.com', //发件邮箱
    pass: 'q152w192' //授权码  
  }
});

transporter.sendMail(mailOptions, function () {
	//发送成功执行回调函数
});
		