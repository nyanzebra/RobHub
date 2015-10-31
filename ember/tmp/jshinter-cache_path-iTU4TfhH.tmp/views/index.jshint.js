QUnit.module('JSHint - views');
QUnit.test('views/index.js should pass jshint', function(assert) { 
  assert.ok(false, 'views/index.js should pass jshint.\nviews/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nviews/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
