const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон filename: 'index.html', // название выходного файла
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            // JavaScript {
    
                {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
                },
                // изображения {
                {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                 type: 'asset/resource',
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                    type: 'asset/inline',
                },
                {
                    test: /\.(scss|css)$/,
                    use: ['style-loader', 'css-loader', 'sass-loader'],
                }
                
        ]
    },
    mode: 'development',
  devServer: {
    historyApiFallback: true,
    //contentBase: path.resolve(__dirname, 'dist'),
    static: './dist',
    open: true, compress: true, hot: true, port: 8080,
  },
   
}
       
