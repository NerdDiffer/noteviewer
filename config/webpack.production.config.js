const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  SRC: path.join(__dirname, '..', 'src'),
  PUBLIC: path.join(__dirname, '..', 'public'),
  BUILD: path.join(__dirname, '..', 'public/build'),
  SEMANTIC_UI: path.join(__dirname, '..', 'semantic/dist')
};

module.exports = {
  bail: true,
  devtool: 'cheap-module-source-map',
  entry: [
    `${PATHS.SEMANTIC_UI}/semantic.js`,
    `${PATHS.SEMANTIC_UI}/semantic.css`,
    `${PATHS.SRC}/index.jsx`,
  ],
  output: {
    path: PATHS.BUILD,
    publicPath: 'build',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    })
  ],
  module: {
    loaders: [
      {
        loader: 'babel',
        include: PATHS.SRC,
        test: /\.jsx?/,
        query: {
          cacheDirectory: true
        }
      },
      {
        loader: 'json',
        include: /node_modules\/tonal-.*/,
        test: /\.json$/
      },
      {
        loader: ExtractTextPlugin.extract('css?inlineSourceMap'),
        include: PATHS.SEMANTIC_UI,
        test: /\.css$/,
      },
      {
        loader: 'file',
        include: PATHS.SEMANTIC_UI,
        test: /\.(eot|png|woff|woff2|svg|ttf)$/,
      }
    ]
  }
};
