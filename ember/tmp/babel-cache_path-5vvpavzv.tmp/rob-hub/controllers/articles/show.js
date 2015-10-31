import Ember from 'ember';
export default Ember.Controller.extend({
    articles_controller: Ember.inject.controller('articles'),
    contract: Ember.computed.reads('articles_controller.'),
    article: (function () {}).property(),
    actions: {
        to_articles: function to_articles() {
            this.get('articles_controller').set('is_expanded', true);
            this.target.transitionTo('articles');
        }
    }
});