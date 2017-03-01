'use strict'; // use strict is required to use ES6 with node until now

const controllers = require('../controllers');

const renderer = controllers.renderer;
const main = new controllers.MainController();

module.exports = router => {
	router.get('/', renderer.call(params => main.index(params)));
}