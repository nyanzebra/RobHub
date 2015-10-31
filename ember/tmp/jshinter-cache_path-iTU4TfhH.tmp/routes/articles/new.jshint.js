QUnit.module('JSHint - routes/articles');
QUnit.test('routes/articles/new.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/articles/new.js should pass jshint.\nroutes/articles/new.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/articles/new.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
