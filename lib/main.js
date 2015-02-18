var buttons = require('sdk/ui/button/action');
var preferences = require('sdk/preferences/service');

var nfx = require('./nightfox.js');

var devtools_theme_pref = 'devtools.theme';

var button = buttons.ActionButton({
  id: "nightfox-toggle",
  label: "Toggle Nightfox",
  icon: nfx.icon_for(preferences.get(devtools_theme_pref)),
  onClick: make_toggler(preferences)
});

// TODO: refresh devtools on theme change
function make_toggler(preferences) {
  return function() {
    var theme = preferences.get(devtools_theme_pref);
    var new_theme = nfx.new_theme_from(theme);
    this.icon = nfx.icon_for(new_theme);
    preferences.set(devtools_theme_pref, new_theme);
  };
}
