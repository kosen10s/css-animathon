var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var webpack = require('webpack');

const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app:   path.join(__dirname, 'app'),
  build: path.join(__dirname)
};

const common = {
  entry: PATHS.app,

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: PATHS.build,
    filename: 'build.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app,
      },
      {
        test: /\.styl?$/,
        loaders: ['style', 'css', 'stylus'],
        include: PATHS.app,
      },
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: 'CSS Animathon - hack-a-thon for learning css animations powered by #kosen10s'
    })
  ]

};

if(!TARGET || TARGET === 'start') {
  module.exports = merge(common, {
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
  });
}
