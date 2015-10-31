import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        submit: function submit() {
            if (this.get('title') === undefined) {
                alert('title must be filled');
                return;
            }
            this.store.createRecord('article', {
                title: this.get('title'),
                author: this.get('author'),
                content: this.get('content')
            }).save()['catch'](function (error) {
                alert(error);
                console.log(error);
            });
        },
        cancel: function cancel() {
            this.transitionTo('articles');
        }
    }
});