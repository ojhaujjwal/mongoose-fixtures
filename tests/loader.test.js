'use strict';

var should = require('should'),
	path = require('path'),
	Loader = require('../src/loader');

describe('Loader tests', function() {
	it ('should load all the fixtures from a directory', function() {
		var loader = new Loader();
		return loader.loadFromDir(path.resolve(__dirname, './assets'))
			.then(function() {
				loader.all().should.be.lengthOf(2);
			});
	});
});
