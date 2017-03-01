
'use strict';

const Promise = require('bluebird');
const _ = require('lodash');

class PageModel {
	constructor(connection) {
		this._connection = connection;
		console.log(connection);
	}

	fetch(limit) {
		limit = limit || 10;

		// hard coded sample return
		let page = _.times(limit, n => ({
			title: `Product ${n}`,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, rerum!'
		}));

		return Promise.resolve(page);

		/*
		
		This is how to create a Promise from scratch, usually, you wont ned to create it because
		many libraries already use them
		 
		return new Promise((resolve, reject) => {
			this._connection.query('select * from page', (err, response) => {
				if (err) {
					reject(err);
				}
				resolve(response);
			})
		});
		*/
	}

	get(id) {
		// hard coded sample return
		return Promise.resolve({
			title: `Product ${id}`,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, rerum!'
		});
	}

	save(data) {
		/*
		return new Promise((resolve, reject) => {
			this._connection.query('insert into page set ?', data, (err, response) => {
				if (err) {
					reject(err);
				}
				resolve(response);
			})
		});
		*/
	}
}

module.exports = PageModel;