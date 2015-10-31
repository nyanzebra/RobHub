import Ember from 'ember';

export
default Ember.Route.extend({
   actions: {
    error: function() {
      this.transitionTo('catchall', 'application-error');
    }
  }
});