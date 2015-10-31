define('rob-hub/instance-initializers/global', ['exports'], function (exports) {

  'use strict';

  exports.initialize = initialize;

  function initialize(application) {
    application.store = application.container.lookup("service:store");
    window.App = application; // or window.Whatever
  }

  exports['default'] = {
    name: 'global',
    initialize: initialize
  };

});