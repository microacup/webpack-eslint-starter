const config = require('./webpack.config.js');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

// 注入webpack-dev-server @see http://webpack.github.io/docs/webpack-dev-server.html
config.entry.app.unshift('webpack-dev-server/client?http://localhost:5000/');

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
  inline: true, // dont use hot，否则浏览器不刷新
  publicPath: '/built/',
});
server.listen(5000);
