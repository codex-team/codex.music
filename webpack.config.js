const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.js',
    library: 'CodexMusic',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  resolve: {
    extensions: [ '.ts' ]
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: [
          /node_modules/,
          '/example/'
        ],
        use: [
          {
            loader: 'ts-loader'
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: true
            }
          }
        ]
      }
    ]
  }
};
