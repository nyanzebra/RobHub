import Ember from 'ember';

export default Ember.Route.extend({
    controllerName: 'projects',

    model: function() {
    	return this.store.find('projects');
    },

    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('title', 'My Projects');
    }
});
