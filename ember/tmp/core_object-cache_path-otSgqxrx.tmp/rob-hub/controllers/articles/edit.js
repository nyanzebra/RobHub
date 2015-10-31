define('rob-hub/controllers/articles/edit', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        articles_controller: Ember['default'].inject.controller('articles'),
        contract: Ember['default'].computed.reads('articles_controller'),
        article: (function () {}).property(),
        actions: {
            save: function save() {
                var route = this.target;
                this.get('articles_controller').set('is_expanded', true);
                var edit = this.get('article');
                debugger;
                try {
                    edit.save().then(function () {
                        route.transitionTo('articles');
                    })['catch'](function (error) {
                        alert(error);
                    });
                } catch (err) {
                    alert(err);
                }
            },
            cancel: function cancel() {
                this.get('articles_controller').set('is_expanded', true);
                this.target.transitionTo('articles');
            }
        }
    });

});