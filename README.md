mongoose-fixtures
===================
Mongoose Data Fixtures

This library aims to provide a simple way to manage and execute the loading of data fixtures for the [mongoose](https://github.com/Automattic/mongoose). Here is a simple example of a fixture:

```js
// fixtures/user-fixture.js
module.exports = function(conn, references) {
	User = conn.model('User');
	var user = new User({...})
	return user.save();
};
```

A fixture is any callback which returns a promise. The promise should be resolved when all the fixtures data are loaded to the database.

Then you need to add fixtures to a loader instance:
```js
	var Loader = require('mongoose-fixtures').Loader;
	loader = new Loader();
	
	loader.load(require('fixtures/user-fixture'));
```

You can load a set of fixtures from a directory as well:
```js
	var path = require('path');

	loader.loadFromDir(path.resolve(__dirname, './fixtures'));
```

Then you can execute the fixtures:
```js
var Executor = require('mongoose-fixtures').Executor,
	mongoose = require('mongoose');
	
var executor = new Executor(mongoose);
executor.execute(loader);
```

## Running the tests
* clone the repo and go to the root directory of the repo
* npm install
* npm test
