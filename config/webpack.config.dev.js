const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    path.resolve(__dirname, '../src') + '/js/app.js',
    path.resolve(__dirname, '../src') + '/scss/app.scss'
  ],
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: './js/app.bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    watchContentBase: true,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.pug'),
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({ filename: './css/app.bundle.css' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'eslint-loader',
          options: { configFile: path.resolve(__dirname, './.eslintrc') }
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: { presets: [ '@babel/preset-env' ] }
        }
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-loader',
          options: { pretty: true }
        }
      }
    ]
  }
};