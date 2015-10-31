define('rob-hub/routes/articles/show', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        setupController: function setupController(controller, model) {
            controller.set('article', model);
        }
    });

});