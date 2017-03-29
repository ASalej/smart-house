var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
    entry: ['./app.js', './scripts/dependencies.js'],

    output: {
        path: path.join(__dirname, '/public/dist'),
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.js', 'app.js']
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ]
    },
    
    node: {
      fs: "empty"
    },

    plugins: [
      new WebpackNotifierPlugin(),
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      }),
    ]
};
