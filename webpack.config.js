const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
    entry: "./index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
    },

    plugins: [
        new CopyPlugin({
            patterns: [{ from: "img", to: "img" }],
        }),
        new HtmlWebpackPlugin({ filename: "index.html", template: "./index.html" }),
        new MiniCssExtractPlugin(),
    ],

    optimization: {
        minimizer: ["...", new CssMinimizerPlugin()],
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.pug$/,
                loader: "pug-loader",
            },
        ],
    },

    devServer: {
        watchFiles: path.join(__dirname, "dist"),
        port: 3000,
    },
};
