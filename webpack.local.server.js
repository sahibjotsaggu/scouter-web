var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var gutil = require('gulp-util');
var config = require('./webpack.local.config');
var port = process.env.npm_package_config_DEV_SERVER_PORT;
var address = process.env.npm_package_config_DEV_SERVER_ADDRESS;

/**
 * Webpack development server
 * http://webpack.github.io/docs/webpack-dev-server.html
 */
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'http://localhost:9000',
  hot: true,
  quiet: false,
  inline: true,
  noInfo: true,
  historyApiFallback: true,

  // Remove console.log mess during watch.
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(port, address, function(error) {
  if (error) {
    throw new gutil.PluginError('webpack-dev-server', error);
  } else {
    gutil.log('[webpack-dev-server]', '💁  WebPack development server running at http://localhost:9000');
  }
});
