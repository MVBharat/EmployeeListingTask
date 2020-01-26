const webpack = require('webpack');
// require("@babel/polyfill");

module.exports= {
    // 1
    entry: './src/index.js',
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              'style-loader',
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
            ],
          },
        ]
      },
      resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
}