'use strict';
var Loader = require('./src/loader'),
	Executor = require('./src/executor');

exports.executor = function(loader) {
	return new Executor(loader);
};

exports.loader = function() {
	return new Loader();
};
