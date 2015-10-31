define('rob-hub/models/article', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Model.extend({
        title: DS['default'].attr('string'),
        author: DS['default'].attr('string'),
        contents: DS['default'].attr('string')
    });

});