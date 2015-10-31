define('rob-hub/tests/services/store.jshint', function () {

  'use strict';

  QUnit.module('JSHint - services');
  QUnit.test('services/store.js should pass jshint', function(assert) { 
    assert.ok(false, 'services/store.js should pass jshint.\nservices/store.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nservices/store.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});