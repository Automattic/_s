// For config
var path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  // styles
  const cssLoaders = [
    {
      loader: 'css-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ];

  // Plugins
  const plugins = [];
  if (env.production) {
    plugins.push(new ExtractTextPlugin('[name].min.css'));
  }

  if (env.dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    entry: {
      global : './client/js/global.js',
      styleguide: './client/sass/styleguide.scss',
    },

    output: {
      filename: '[name].min.js',
      path: path.resolve(__dirname, '../../static'),
    },

    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: env.production ?
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: cssLoaders,
            }) :
            [
              {
                loader: 'style-loader',
              },
              ...cssLoaders,
            ],
        },
      ]
    },

    plugins,

    // For hot reloading.
    devServer: {
      hot: true,
      quiet: false,
      noInfo: false,
      contentBase: '/static/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: { colors: true },
    },
  };
};
