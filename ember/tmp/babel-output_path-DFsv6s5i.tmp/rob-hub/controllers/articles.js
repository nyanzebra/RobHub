import Ember from 'ember';

export default Ember.Controller.extend({
    is_expanded: true,
    articles: (function () {
        return this.store.findAll('article');
    }).property(),
    actions: {
        'new': function _new() {
            this.set('is_expanded', false);
            this.target.transitionTo('articles.new')['catch'](function () {
                self.set('is_expanded', true);
            });
        },
        edit: function edit(id) {
            $('#modal-article-' + id).modal('hide');
            this.set('is_expanded', false);
            var self = this;
            this.target.transitionTo('articles.edit', id)['catch'](function () {
                self.set('is_expanded', true);
            });
        },
        show: function show(id) {
            $('#modal-article-' + id).modal('hide');
            this.set('is_expanded', false);
            var self = this;
            this.target.transitionTo('articles.show', id)['catch'](function () {
                self.set('is_expanded', true);
            });
        },
        should_destroy: function should_destroy(id) {
            $('#modal-article-' + id).modal('hide');
            $('#modal-article-delete-' + id).modal('show');
        },
        destroy: function destroy(id) {
            debugger;
            $('#modal-article-delete-' + id).modal('hide');
            this.store.findRecord('article', parseInt(id)).then(function (article) {
                article.destroyRecord();
            });
        },
        summon: function summon(id) {
            $('#modal-article-' + id).modal('show');
        }
    }
});