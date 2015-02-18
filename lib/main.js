var buttons = require('sdk/ui/button/action');
var preferences = require('sdk/preferences/service');

var nfx = require('./nightfox.js');

var devtools_theme_pref = 'devtools.theme';

var button = buttons.ActionButton({
  id: "nightfox-toggle",
  label: "Toggle Nightfox",
  icon: nfx.icon_for(preferences.get(devtools_theme_pref)),
  onClick: toggle_nightfox
});

// FIXME: inject preferences and button into toggle_nightfox
//        ... and test this
// TODO: refresh devtools on theme change
function toggle_nightfox() {
  var theme = preferences.get(devtools_theme_pref);
  var new_theme = nfx.new_theme_from(theme);
  button.icon = nfx.icon_for(new_theme);
  preferences.set(devtools_theme_pref, new_theme);
}
