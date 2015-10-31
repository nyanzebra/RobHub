/* jshint ignore:start */

define('rob-hub/config/environment', ['ember'], function(Ember) {
  var prefix = 'rob-hub';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("rob-hub/tests/test-helper");
} else {
  require("rob-hub/app")["default"].create({"host":"http://api.robhub.com:3000","namespace":"api","name":"rob-hub","version":"0.0.0+ddd49861"});
}

/* jshint ignore:end */
