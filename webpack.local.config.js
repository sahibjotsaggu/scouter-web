var path = require('path');
var webpack = require('webpack');
var gutil = require('gulp-util');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pathToReact = '/node_modules/react/react.js';
var pathToReactRouter = '/node_modules/react-router/lib/index.js';
var pathToRedux = '/node_modules/redux/lib/index.js';
var pathToReduxReact = '/node_modules/redux/react.js';
var pathToBabel = '/node_modules/babel/polyfill.js';

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: 'eval',

  // Cache the build
  cache: true,

  entry: {
    app: [
      'webpack-dev-server/client?http://0.0.0.0:9000',
      'webpack/hot/only-dev-server',
      './app/client'
    ],
    vendors: ['react', 'react-router', 'redux']
  },

  /**
   * Instead of making Webpack go through React and all its dependencies,
   * you can override the behavior in development.
   */
  resolve: {
    extensions: ['', '.js', '.scss', '.woff', '.woff2', '.png', '.jpg'],
    modulesDirectories: ['node_modules', 'app']
  },

  /**
   * This will not actually create a bundle.js file in ./dist.
   * It is used by the dev server for dynamic hot loading.
   */
  output: {
    publicPath: '/',
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_HOSTNAME: JSON.stringify(process.env.CLIENT_API_URL),
      API_VERSION: JSON.stringify(process.env.CLIENT_API_VERSION),
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/template.html'
    }),

    /**
     * An optional plugin that tells the reloader to not reload if there is a
     * syntax error in your code. The error is simply printed in the console,
     * and the component will reload when you fix the error.
     */
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],

  /**
   * Transform JS source code using Babel configured to Stage 0, transform CSS
   * source code using PostCSS and require binary files with file-loader.
   */
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'react-hot!babel?stage=0&loose[]=es6.modules'
      },
      {
        test: /\.less$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer!sass'
      },
      {
        test: /\.woff$|\.woff2$|\.png$|\.jpg$/,
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        loader: 'file'
      }
    ],
    noParse: [
      pathToReact,
      pathToReactRouter,
      pathToRedux,
      pathToReduxReact,
      pathToBabel
    ]
  }
};
