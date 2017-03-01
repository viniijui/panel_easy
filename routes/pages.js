'use strict'; // use strict is required to use ES6 with node until now

const controllers = require('../controllers');

const renderer = controllers.renderer;
const pages = new controllers.PagesController();

module.exports = router => {
	router.get('/pages', renderer.call(params => pages.index(params)));
	router.get('/pages/:id', renderer.call(params => pages.product(params)));
}