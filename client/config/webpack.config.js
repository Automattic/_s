// For config
var path = require('path');

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

  return {
    entry: {
      global : './client/js/global.js'
    },

    output: {
      filename: '[name].bundle.js',
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

    plugins: [
      new ExtractTextPlugin('[name].css'),
    ]
  };
};
