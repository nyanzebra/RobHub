import Ember from 'ember';

export
default Ember.Controller.extend({
    actions: {
        to_projects: function() {
            this.target.transitionTo('projects');
        },
        to_blog: function() {
            this.target.transitionTo('articles');
        },
        to_resume: function() {
            this.target.transitionTo('resume');
        }
    }
});