define('rob-hub/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(false, 'adapters/application.js should pass jshint.\nadapters/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nadapters/application.js: line 4, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors'); 
  });

});