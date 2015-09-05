var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Webpack configuration file for production.
 */
module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, './app/client')
  },
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].[hash].js',
    sourceMapFilename: '[file].[hash].map'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          stage: 0
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.woff$|\.woff2$|\.png$|\.jpg$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_HOSTNAME: JSON.stringify('http://api.segment.social/api'),
      API_VERSION: JSON.stringify('v1')
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: 'app/template.html'
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app'],
  }
};
