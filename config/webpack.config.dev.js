const path = require('path');
const webpack = require('webpack');
const Config = require('webpack-config').Config;

module.exports = new Config().extend('./config/webpack.config.base').merge({
  output: {
    pathinfo: true
  },
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'commons',
      filename: 'commons.js',
      minChunks: 2
    })
  ],
  devServer: {
    port: 9000,
    host: 'eatandgo.localhost',
    hot: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: path.resolve(__dirname, '../src')
  }
});
