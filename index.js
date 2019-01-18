  
global.__basename = __dirname;

global.config = require(__basename + '/config/config.js');

const express = require('express');

const bodyParser = require('body-parser');

const Routes = require(__basename + '/routes/routes.js');


//express实例化
const app = express();

//设置跨域权限
app.all('*', (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header('X-Powered-By', '3.2.1');
  next();
});

//设置静态目录
//中间件
app.use(express.static(__basename + '/public'));

//解析post请求体, 将请求体格式化一个对象
app.use(bodyParser.json());

//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.urlencoded({extended:true}));

//加载所有路由信息
Routes.routes(app);

//处理404
app.use((req, res) => {
	res.status(404);
	res.send('页面资源不存在');
});

//处理500
app.use((err, req, res) => {
	res.status(500);
	res.send('服务程序出错');
});

app.listen(config.server.port);

// 引入express中间件
// var express = require('express');
// var app = express();

// //指定启动服务器到哪个文件夹，我这边指的是dist文件夹
// app.use(express.static('../dist'));

// //监听端口为3000
// var server = app.listen(10002, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('Example app listening at http://%s:%s', host, port);
// });