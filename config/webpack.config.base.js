const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../src'),
  entry: {
    app: './app.module.js',
    vendor: './vendor.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    publicPath: '/assets'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        CLIENT_ID: JSON.stringify(process.env.CLIENT_ID),
        CLIENT_SECRET: JSON.stringify(process.env.CLIENT_SECRET),
        TOKEN_NAME: JSON.stringify(process.env.TOKEN_NAME),
        GMAPS_KEY: JSON.stringify(process.env.GMAPS_KEY)
      },
    })
  ]

};
