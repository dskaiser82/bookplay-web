const path = require('path');
const webpack = require('webpack');

module.exports = {
  // mode: process.env.NODE_ENV === 'production' ? 'production' : "development",
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    hot: true,
    port: 3000
  },
};
