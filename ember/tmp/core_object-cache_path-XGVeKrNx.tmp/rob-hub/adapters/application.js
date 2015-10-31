define('rob-hub/adapters/application', ['exports', 'ember-data', 'rob-hub/config/environment'], function (exports, DS, ENV) {

    'use strict';

    exports['default'] = DS['default'].RESTAdapter.extend({
        host: 'http://api.robhub.com:3000',
        // namespace: 'api',
        headers: {
            'Accept': 'application/vnd.robhub.v1+json',
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        },
        ajax: function ajax(url, method, hash) {
            hash = hash || {}; // hash may be undefined
            hash.crossDomain = true;
            hash.xhrFields = {
                withCredentials: false
            };
            return this._super(url, method, hash);
        }
        // generateIdForRecord: function(store, inputProperties) {
        //     var uuid = App.generateUUIDWithStatisticallyLowOddsOfCollision();
        //     return uuid;
        // }
    });

});