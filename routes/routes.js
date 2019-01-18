const RouteController = require(__basename + '/routesController/routesController.js');

exports.routes = function (app) {

	app.get('/nav', RouteController.navController);
	app.get('/message', RouteController.sendMessageController);
	app.post('/register', RouteController.registerController);
	app.post('/login', RouteController.loginController);
	app.get('/home_banner', RouteController.homeController);
	app.get('/Amountofaccess', RouteController.AmountofaccessController);



}