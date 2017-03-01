'use strict';

const models = require('../models');
const pages = new models.PageModel();
	
class PagesController {
	index(params) {
		return pages.fetch(params.limit)
			.then(pages => ({
				template: 'pages/index',
				params: {
					title: 'Bem vindo',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nesciunt inventore iusto, veniam libero dolores, quidem eius esse quos iste?',
					pages
				}
			}));
	}

	product(params) {
		return pages.get(params.id)
			.then(product => ({
				template: 'pages/product',
				params: {
					product
				}
			}));

	}
}

module.exports = PagesController;