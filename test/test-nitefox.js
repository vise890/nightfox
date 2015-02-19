var nfx = require('./nitefox.js');

exports['test new_theme_from'] = function(assert) {
  assert.ok(nfx.new_theme_from('light') == 'dark');
  assert.ok(nfx.new_theme_from('dark') == 'light');
};

exports['test icon_for'] = function(assert) {
  assert.ok(nfx.icon_for('light')['32'] == './from_light.svg');
  assert.ok(nfx.icon_for('dark')['32'] == './from_dark.svg');
  assert.ok(nfx.icon_for('dark')['16'] == './from_dark.svg');
  assert.ok(nfx.icon_for()['32'] == './from_dark.svg', 'defaults to dark');
};

require("sdk/test").run(exports);
