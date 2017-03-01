
'use strict';

const Promise = require('bluebird');
const _ = require('lodash');

//console.log(connection);

class MainModel {
	constructor(connection) {
		//console.log(connection);
		this._connection = connection;
		//this._connection_radius = connection_radius;
	}


	show() {
		return Promise.resolve();
	}


	fetch(limit) {
		limit = limit || 10;

		// hard coded sample return
		/*let main = _.times(limit, n => ({
			title: `Product ${n}`,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, rerum!'
		}));
*/
		return Promise.resolve();

		/*
		select * from radacct where radacctid = 66
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

	get() {
		this._connection.query('select * from hotspots where id = 1', (err, response) => {
			if (err) {
				return err;
			}
			return 	response[0];
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

module.exports = MainModel;