import Ember from 'ember';

export default Ember.Route.extend({
    model: function model() {
        return this.store.findAll('article');
    },
    //     to_articles: function(model) {
    //         this.transitionTo('articles', model);
    //     },
    //     edit: function(model) {
    //         this.transitionTo('articles.edit', model.copy());
    //     },
    //     create: function(model) {
    //         this.storage.create(model);
    //         this.transitionTo('articles');
    //     },
    //     update: function(model) {
    //         this.storage.update(model);
    //         this.transitionTo('articles');
    //     },
    //     remove: function(model) {
    //         this.storage.remove(model);
    //     },
    //     cancel: function(model) {
    //         this.transitionTo('articles');
    //     }
    // },
    setupController: function setupController(controller, model) {
        controller.set('model', model);
    }
});