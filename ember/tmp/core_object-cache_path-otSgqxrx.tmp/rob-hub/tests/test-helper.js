define('rob-hub/tests/test-helper', ['rob-hub/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});