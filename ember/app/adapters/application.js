import DS from 'ember-data';
import ENV from '../config/environment';

export
default DS.RESTAdapter.extend({
    host: 'http://api.robhub.com:3000',
    // namespace: 'api',
    headers: {
        'Accept': 'application/vnd.robhub.v1+json',
        'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
    },
    ajax: function(url, method, hash) {
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