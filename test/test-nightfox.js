var nightfox = require('./nightfox.js');

exports['test new_theme_from'] = function(assert) {
  assert.ok(nightfox.new_theme_from('light') == 'dark');
  assert.ok(nightfox.new_theme_from('dark') == 'light');
};

require("sdk/test").run(exports);
