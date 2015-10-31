define('rob-hub/tests/models/project.jshint', function () {

  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/project.js should pass jshint', function(assert) { 
    assert.ok(false, 'models/project.js should pass jshint.\nmodels/project.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nmodels/project.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});