import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'projects',

    model: function model() {
        return this.store.find('projects');
    },

    setupController: function setupController(controller, model) {
        controller.set('model', model);
        controller.set('title', 'My Projects');
    }
});