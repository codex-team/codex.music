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
        test: /\.ts?$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          },
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      }
    ]
  }
};
