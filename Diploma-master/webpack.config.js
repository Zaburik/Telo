const path = require('path');


module.exports = {
	entry: {
		bundle: './src/scripts/index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		publicPath: '/dist'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}
};