'use strict';

var Promise = require('promise'),
	fs = require('fs');

function Loader()
{
	this.fixtures = [];
}

Loader.prototype.load = function(fixture, name) {
	if (name) fixture.name = name;
	this.fixtures.push(fixture);
};

Loader.prototype.loadFile = function(path) {
	this.load(require(path));
};

Loader.prototype.loadFromDir = function(dir) {
	var _this = this;
	return new Promise(function(resolve, reject) {
		fs.readdir(dir, function(err, files) {
			if (err) return reject(err);
			files.forEach(function(file) {
				_this.loadFile(file);
			});
			resolve();
		});
	});
};

Loader.prototype.all = function() {
	return this.fixtures;
};

module.exports = Loader;