var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/component/hello.jsx',
    output: {
        path: path.resolve('lib'),
        filename: './component/hello.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}