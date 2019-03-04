const path = require('path');
const defaultConfig = require('@open-wc/building-webpack/default-config');
const merge = require('webpack-merge');

const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin').BabelMultiTargetPlugin;






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
      {
        test: /\.js$/,
        use: [
            BabelMultiTargetPlugin.loader(),
        ],
    },
    ],
  },

  resolve: {
    mainFields: [
        'es2015',
        'module',
        'main',
    ],
},


plugins: [
    new BabelMultiTargetPlugin(),
  
],



});


module.exports = defaultConfig({
  indexHTML: path.resolve(__dirname, './src/index.html'),
  indexJS: path.resolve(__dirname, './src/index.js'),
});
