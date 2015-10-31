define('rob-hub/controllers/articles/show', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        articles_controller: Ember['default'].inject.controller('articles'),
        contract: Ember['default'].computed.reads('articles_controller.'),
        article: (function () {}).property(),
        actions: {
            to_articles: function to_articles() {
                this.get('articles_controller').set('is_expanded', true);
                this.target.transitionTo('articles');
            }
        }
    });

});