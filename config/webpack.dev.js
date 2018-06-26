const path = require('path')

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  mode: 'development',
  output: {
    filename: './js/[name].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    contentBase: 'dist',
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'index.html'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ]
      },
      {
        test: /\.(jpg|gif|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name:'[name].[ext]',
              publicPath: '../fonts/',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
}