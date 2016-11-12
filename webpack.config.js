var webpack = require('webpack');

var plugins = [];
if (process.env.NODE_ENV == 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    })
  );
}

var devtool = null;
if (process.env.NODE_ENV != 'production') {
  devtool = 'source-map';
}

var preLoaders = [];
if (process.env.NODE_ENV != 'production') {
  preLoaders = [
    {
      test: /\.js$/,
      loader: "source-map-loader"
    }
  ]
};

var port = 8081;
if (process.env.PORT !== undefined) {
  port = process.env.PORT;
}

module.exports = {
  entry: {
    'krei': [
      './src/index.js'
    ]
  },
  output: {
    path: './public',
    filename: '[name].js'
  },
  devtool: devtool,
  module: {
    preLoaders: preLoaders,
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
          plugins: ['transform-object-assign', 'transform-exponentiation-operator']
        }
      }
    ]
  },
  externals: {
    
  },
  resolve: {
    extensions: ['', '.js'],
  },
  plugins: plugins,
  devServer: {
    contentBase: "./public",
    port: port
  }
};