'use strict';

const mysql = require('mysql');

const createDBConnection = () => {
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'toor',
		database:'laravel'
	});
};


module.exports = {
	createDBConnection
}