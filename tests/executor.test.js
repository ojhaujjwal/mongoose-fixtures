'use strict';

var should = require('should'),
	path = require('path'),
	mongoose = require('mongoose'),
	Loader = require('../src/loader'),
	Executor = require('../src/executor');

describe('Executor tests', function() {
	it ('should execute all the fixture', function() {
		var loader = new Loader();
		var executor = new Executor(mongoose);
		return loader.loadFromDirectory(path.resolve(__dirname, './assets'))
			.then(function() {
				return executor.execute(loader);
			}).then(function() {
				executor.references.a.should.be.exactly('a');
				executor.references.b.should.be.exactly('b');
			});
	});
});
