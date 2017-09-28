const path = require('path');
// const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: path.resolve(__dirname, 'built'),
    publicPath: '/built/',
    filename: 'app.bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),

    // process.env.NODE_ENV === 'production'
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //   },
    //   except: ['$super', '$', 'exports', 'require'],
    //   comments: false,
    //   beautify: false,
    //   sourceMap: false,
    // }),
  ],
};
