define('rob-hub/controllers/articles', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            new_article: function new_article() {
                this.transitionTo('articles.new');
            }
        }
    });

});