const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.NODE_ENV === "production";

const cssLoaders = [
  {
    loader: "css-loader",
    options: {
      modules: true,
      localIdentName: "[name]_[local]",
      minimize: production ? { discardComments: { removeAll: true } } : false
    }
  },

  {
    loader: "postcss-loader",
    options: {
      sourceMap: true,
      plugins: () => [
        // Need to support old version of webkit in PhantomJS
        autoprefixer({
          browsers: ["last 2 versions", "Chrome 28"]
        })
      ]
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
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
