/* config-overrides.js */

module.exports = function override(config, env) {
  const rewireStyledComponents = require("react-app-rewire-styled-components");

  /* config-overrides.js */
  module.exports = function override(config, env) {
    config = rewireStyledComponents(config, env, {
      ssr: true,
      displayName: true
    });
    return config;
  };
};
