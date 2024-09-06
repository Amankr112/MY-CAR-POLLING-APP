module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
        ["module:react-native-dotenv", {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
      }]
    ],
    overrides: [{
      test: fileName => !fileName.includes('node_modules/react-native-maps'),
      plugins: [["@babel/plugin-transform-private-methods", { "loose": true }]]
      }],
  };
};