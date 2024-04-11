const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports= {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
          filename: './index.html',
        }),
      ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, '../src'),"../node_modules"],
    }
}