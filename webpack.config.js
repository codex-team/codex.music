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
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          },
        ]
      }
    ]
  }
};
