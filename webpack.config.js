var path              = require('path'),
    webpack           = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports =  {
    devtool: 'eval',
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        './app'
    ],
    output : {
        path: path.join(__dirname, 'static'),
        filename : '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js'],
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['ng-annotate', 'babel-loader'], exclude: /node_modules/ },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass', 'postcss'] },
            { test: /\.html$/, loader: 'raw' },
            { test: /\.(png|jpg|gif|svg|ttf|eot|woff(2)?)\??.*$/, loader: 'url', query: { limit: 100000 } },
        ],
    },
    postcss: () => [
        require('postcss-import'),
        require('postcss-url'),
        require('autoprefixer'),
        require('precss'),
    ],

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
    
};