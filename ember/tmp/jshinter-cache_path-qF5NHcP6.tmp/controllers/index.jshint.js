QUnit.module('JSHint - controllers');
QUnit.test('controllers/index.js should pass jshint', function(assert) { 
  assert.ok(false, 'controllers/index.js should pass jshint.\ncontrollers/index.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/index.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
