QUnit.module('JSHint - routes');
QUnit.test('routes/project.js should pass jshint', function(assert) { 
  assert.ok(false, 'routes/project.js should pass jshint.\nroutes/project.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/project.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
});
