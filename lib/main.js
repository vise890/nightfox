var buttons = require('sdk/ui/button/action');
var preferences = require('sdk/preferences/service');

var Cu = require("chrome").Cu;
var gDevTools = Cu.import("resource:///modules/devtools/gDevTools.jsm").gDevTools;

var nfx = require('./nitefox.js');

var devtools_theme_pref = 'devtools.theme';

var button = buttons.ActionButton({
  id: "nitefox-toggle",
  label: "Toggle nitefox",
  icon: nfx.icon_for(preferences.get(devtools_theme_pref)),
  onClick: make_toggler(preferences)
});

function make_toggler(preferences) {
  return function() {
    var theme = preferences.get(devtools_theme_pref);
    var new_theme = nfx.new_theme_from(theme);
    this.icon = nfx.icon_for(new_theme);
    preferences.set(devtools_theme_pref, new_theme);
    gDevTools.emit("pref-changed", {
      pref: devtools_theme_pref,
      newValue: new_theme,
      oldValue: theme
    });
  };
}
