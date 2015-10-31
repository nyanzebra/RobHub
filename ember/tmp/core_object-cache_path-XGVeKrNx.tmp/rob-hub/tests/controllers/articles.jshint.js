define('rob-hub/tests/controllers/articles.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/articles.js should pass jshint', function(assert) { 
    assert.ok(false, 'controllers/articles.js should pass jshint.\ncontrollers/articles.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\ncontrollers/articles.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});