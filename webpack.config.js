const path = require('path');

module.exports = {
  mode: 'development',
  entry:  './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
          presets: ['@babel/preset-env', "@babel/preset-react"]
          },
        }
      }
    ]
  }
}