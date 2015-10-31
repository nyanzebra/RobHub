import Ember from 'ember';

export default Ember.Route.extend({
    setupController: function setupController(controller, model) {
        controller.set('article', model);
    }
});