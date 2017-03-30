const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	resolve: {
		extensions: [
			'.web.js',
			'.js',
			'.jsx',
			'.json'
		],
		modules: [
			"node_modules",
			path.resolve(__dirname, "src")
		],
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
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],

	devtool: 'cheap-module-source-map',
	entry: {
		main: './src/App',
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'js/[name]-[hash].bundle.js',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},

	module: {
		rules: [
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
				loader: 'babel-loader?presets[]=react,presets[]=es2015'
			}
		]
	},

	devServer: {
		contentBase: './public',
		historyApiFallback: true,
		inline: true
	}

};
