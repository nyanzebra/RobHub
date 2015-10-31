import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        to_projects: function to_projects() {
            this.target.transitionTo('projects');
        },
        to_blog: function to_blog() {
            this.target.transitionTo('articles');
        },
        to_resume: function to_resume() {
            this.target.transitionTo('resume');
        }
    }
});