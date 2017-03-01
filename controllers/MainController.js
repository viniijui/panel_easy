'use strict';
const connection = require('../config/database').createDBConnection();
const models = require('../models');
const main = new models.MainModel(connection);

class MainController {
	index() {
        console.log(main.get());
		return main.show()
			.then(main => ({
				template: 'dashboard',
				params: {
					title: 'Bem vindo',
					content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nesciunt inventore iusto, veniam libero dolores, quidem eius esse quos iste?',
					main
				}
			}));
	}

}

module.exports = MainController;