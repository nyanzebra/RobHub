define('rob-hub/routes/catchall', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      error: function error() {
        this.transitionTo('catchall', 'application-error');
      }
    }
  });

});