'use strict';

const express = require('express');
const router = express.Router();
const pages = require('./pages')(router);
const main = require('./main')(router);

module.exports = router;