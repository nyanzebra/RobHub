define('rob-hub/tests/models/article.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/article.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/article.js should pass jshint.\nmodels/article.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/article.js: line 2, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});