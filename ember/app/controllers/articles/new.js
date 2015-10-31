import Ember from 'ember';
export
default Ember.Controller.extend({
    articles_controller: Ember.inject.controller('articles'),
    contract: Ember.computed.reads('articles_controller.'),
    article: function() {
        return this.store.createRecord('article');
    }.property(),
    actions: {
        save: function() {
            var route = this.target;
            this.get('articles_controller').set('is_expanded',true);
            this.get('article').save().then(function() {
                route.transitionTo('articles');
            }).catch(function(error) {
                alert(error);
            });
        },
        cancel: function() {
            this.get('articles_controller').set('is_expanded',true);
            this.target.transitionTo('articles');
        }
    }
});