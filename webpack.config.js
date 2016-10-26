const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  PUBLIC: path.join(__dirname, 'public'),
  BUILD: path.join(__dirname, 'public/build')
};

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    `${PATHS.SRC}/index.jsx`
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
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.PUBLIC
  }
};
