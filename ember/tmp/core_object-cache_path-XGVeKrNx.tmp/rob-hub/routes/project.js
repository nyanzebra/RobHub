define('rob-hub/routes/project', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        controllerName: 'projects',

        model: function model() {
            return this.store.find('projects');
        },

        setupController: function setupController(controller, model) {
            controller.set('model', model);
            controller.set('title', 'My Projects');
        }
    });

});