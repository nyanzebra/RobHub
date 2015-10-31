QUnit.module('JSHint - serializers');
QUnit.test('serializers/application.js should pass jshint', function(assert) { 
  assert.ok(false, 'serializers/application.js should pass jshint.\nserializers/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nserializers/application.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
