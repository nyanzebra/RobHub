import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        new_article: function new_article() {
            this.transitionTo('articles.new');
        }
    }
});