const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'src');

const HTMLOptions = {
	title: 'Bottle Rocket exam'
};

module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		port: 3000,
		progress: true
	},
	context: path.resolve(APP_PATH),
	entry: path.resolve(APP_PATH, 'index.js'),
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: [
					'source-map-loader',
					{
						loader: 'babel-loader',
						options: {
							sourceMap: true,
							presets: [
								'@babel/preset-env',
								'@babel/preset-react'
							],
							plugins: [
								'@babel/plugin-proposal-class-properties'
							]
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            publicPath: '/'
                        }
                    }
                ]
            }
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(Object.assign({}, HTMLOptions, {
			template: './index.html'
		}))
	],
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.scss'],
		alias: {
			variables: path.resolve(__dirname, './src/stylesheets/_variables.scss')
		}
	}
};
