import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function () {
    this.route('catchall', {
        path: '/*wildcard'
    });
    this.route('index', {
        path: '/'
    });
    this.route('about', {
        path: '/about'
    });
    this.route('resume', {
        path: '/resume'
    });
    this.route('projects', {
        path: '/projects'
    });
    this.route('articles', {
        path: 'articles'
    }, function () {
        this.route('new');
        this.route('show', {
            path: ':article_id'
        });
        this.route('edit', {
            path: ':article_id/edit'
        });
    });
});

export default Router;