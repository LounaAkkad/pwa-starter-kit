const path = require('path');
const defaultConfig = require('@open-wc/building-webpack/default-config');
const merge = require('webpack-merge');







module.exports = merge(defaultConfig, {
  entry: ['./components/my-app.js'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
    
    ],
  },

  





});


module.exports = defaultConfig({
  indexHTML: path.resolve(__dirname, './ndex.html'),
  indexJS: path.resolve(__dirname, '.src/components/my-app.js'),
});
