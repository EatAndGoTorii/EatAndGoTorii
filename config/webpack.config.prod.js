const path = require('path');
const webpack = require('webpack');
const Config = require('webpack-config').Config;

module.exports = new Config().extend({'./config/webpack.config.dev.js': config => {
  delete config.devtool;
  delete config.output.pathinfo;
  delete config.devServer;

  return config;
}
})
  .merge({
    plugins: [
      new webpack.LoaderOptionsPlugin({
        minimize: true
      }),
      new webpack.optimize.UglifyJsPlugin({
        mangle: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compress: {
          warnings: false,
          drop_console: true
        }
      })
    ]
  });
