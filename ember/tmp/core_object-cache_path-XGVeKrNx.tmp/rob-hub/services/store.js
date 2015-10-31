define('rob-hub/services/store', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    exports['default'] = DS['default'].Store.extend({
        adapter: 'application'
    });

});