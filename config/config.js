let server = {
	host: '149.129.100.69',
	port: 10002
};

exports.mysqlOptions = {
	host: server.host,
	user: 'root',
	password: 'root123',
	database: 't_user'
}

exports.server = server;

// sudo
//http://192.168.100.59:8080/images/banner.png1