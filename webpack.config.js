const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.min.js'
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts?$/,
        loader: 'eslint-loader',
        options: {
          fix: true
        }
        // loader: 'awesome-typescript-loader', 'eslint-loader']
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader',
        options: {
          fix: true
        }
      }
    ]
  }
};
