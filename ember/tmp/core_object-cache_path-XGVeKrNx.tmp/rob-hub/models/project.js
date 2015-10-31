define('rob-hub/models/project', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    author: DS['default'].attr('string'),
    language: DS['default'].attr('string'),
    description: DS['default'].attr('string')
  });

});