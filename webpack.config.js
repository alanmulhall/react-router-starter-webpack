var webpack = require('webpack');

module.exports = {
    entry: "./app/index.jsx",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["",".js", ".jsx"]
    },
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};
