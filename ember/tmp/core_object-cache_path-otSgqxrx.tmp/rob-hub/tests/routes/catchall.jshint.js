define('rob-hub/tests/routes/catchall.jshint', function () {

  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/catchall.js should pass jshint', function(assert) { 
    assert.ok(false, 'routes/catchall.js should pass jshint.\nroutes/catchall.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/catchall.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors'); 
  });

});