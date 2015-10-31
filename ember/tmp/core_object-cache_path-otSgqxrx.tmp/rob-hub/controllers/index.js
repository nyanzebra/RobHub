define('rob-hub/controllers/index', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
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

});