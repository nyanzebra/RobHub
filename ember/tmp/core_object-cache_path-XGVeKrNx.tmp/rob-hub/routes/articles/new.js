define('rob-hub/routes/articles/new', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        setupController: function setupController(controller, model) {
            controller.set('model', model);
        }
    });

});