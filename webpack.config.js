const path = require('path');
const plugins = require('./webpack/plugins');
const postcss = require('./webpack/postcss');
const loaders = require('./webpack/loaders');

const devmode = process.env.NODE_ENV !== 'production';

function getEntrySources(sources) {
  if (devmode) {
    sources.push('webpack-hot-middleware/client');
  }

  return sources;
}

module.exports = {
  entry: {
    app: getEntrySources(['./src/index.js']),
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js' : '[name].js',
    publicPath: '/',
    sourceMapFilename: process.env.NODE_ENV === 'production' ?
      '[name].[chunkhash].js.map' : '[name].js.map',
    chunkFilename: process.env.NODE_ENV === 'production' ?
      '[name].chunk.[chunkhash].js' : '[name].js',
  },

  devtool: !devmode ? 'source-map' : 'inline-source-map',

  plugins: plugins,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: Object.assign({}, { '/api/*': 'http://localhost:3000' }),
    inline: true,
  },

  module: {
    preLoaders: [
      loaders.eslint,
    ],
    loaders: [
      loaders.css,
      loaders.js,
      loaders.json,
      loaders.image,
      loaders.font,
    ],
  },

  postcss: postcss,

  externals: {
    'react/lib/ReactContext': 'window',
    'react/lib/ExecutionEnvironment': 'window',
    'react/addons': true,
  },
};
