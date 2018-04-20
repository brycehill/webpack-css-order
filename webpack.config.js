const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const production = process.env.NODE_ENV === "production";

const cssLoaders = [
  {
    loader: "css-loader",
    options: {
      modules: true,
      localIdentName: "[name]_[local]"
    }
  },

  {
    loader: "resolve-url-loader"
  },

  {
    loader: "postcss-loader",
    options: {
      sourceMap: true,
      plugins: () => [autoprefixer({ browsers: ["last 2 versions"] })]
    }
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true
    }
  }
];

module.exports = {
  entry: "./src/index.js",
  mode: production ? "production" : "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: !production
            }
          }
        ]
      },
      {
        test: /^(.)*s?css$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          ...cssLoaders
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin()
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
