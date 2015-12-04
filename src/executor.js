'use strict';
var Promise = require('promise');

/**
 * Executes promises serially
 * @param promiseFactories
 * @returns {Promise}
 */
function executeSequentially(promiseFactories) {
	var result = Promise.resolve();
	promiseFactories.forEach(function (promiseFactory) {
		result = result.then(promiseFactory);
	});
	return result;
}

function Executor(conn) {
	this.conn = conn;
	this.references = {};
}

Executor.prototype._executeFixture = function(fixture) {
	var _this = this;
	return function() {
		return fixture(_this.conn, _this.references);
	}
};

Executor.prototype.execute = function(loader) {
	var _this = this;
	return executeSequentially(loader.all().map(function(fixture) {
		return _this._executeFixture(fixture);
	}));
};

module.exports = Executor;
