const path = require('path');

const PATHS = {
  SRC: path.join(__dirname, 'src'),
  BUILD: path.join(__dirname, 'build'),
};

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    `${PATHS.SRC}/index.jsx`
  ],
  output: {
    path: PATHS.BUILD,
    publicPath: '/',
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
          presets: ['react', 'es2015', 'stage-1'],
          cacheDirectory: true
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: PATHS.BUILD
  }
};
