const path = require('path');

module.exports = {
  // watch: true,
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "useBuiltIns": "usage",
                "corejs": 3
              }
            ]
          ]
        }
      }]
    }]
  },
  devtool: "source-map",
};
