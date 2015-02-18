exports.new_theme_from = function(theme) {
  if (theme === 'dark') {
      return 'light';
  } else if (theme === 'light') {
    return 'dark';
  } else {
    return 'dark';
  }
};

exports.icon_for = function(theme) {
  theme = theme || 'dark';
  var icon_path = './from_'+theme+'.svg';
  return {
    "16": icon_path,
    "32": icon_path,
    "64": icon_path
  };
};
