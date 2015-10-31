QUnit.module('JSHint - routes');
QUnit.test('routes/articles.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/articles.js should pass jshint.\nroutes/articles.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/articles.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
