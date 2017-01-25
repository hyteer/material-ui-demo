const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const node_dir = __dirname + '/node_modules';

const config = {

  resolve: {
    alias: {
      jQuery: node_dir + '/jquery/dist/jquery.min.js',
      React: node_dir + '/react',
      ReactDom: node_dir + '/react-dom',
    },
    extensions: [
      '',
      '.webpack.js',
      '.web.js',
      '.js',
      '.jsx',
      '.json'
    ],
    modulesDirectories: ["node_modules", "components"]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'window.jQuery': 'jquery',
      'jQuery': 'jquery',
      'window.$': 'jquery',
      'React': 'react',
      'ReactDOM': 'react-dom'
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.tmpl.html'
    }),
    new webpack.BannerPlugin('Copyright AdMaster Planning inc.'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'js/commons.js'}),
    new webpack.DefinePlugin({
      VERSION: JSON.stringify('panorama-1.0.0'),
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],

  devtool: 'cheap-module-source-map',
  entry: {
    main: './src/App',
    vendors: [
      'jQuery',
      'React',
      'ReactDom',
    ]
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: 'js/[name]-[hash].bundle.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader'
      }, {
        test: /\.jsx?$/,
        include: path.join(__dirname, './src'),
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  },

  devServer: {
    contentBase: './public',
    colors: true,
    historyApiFallback: true,
    inline: true
  }

};

module.exports = config;
