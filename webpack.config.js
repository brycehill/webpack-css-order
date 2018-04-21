const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = () => {
  return [
    {
      mode: production ? "production" : "development",
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader"
              }
            ]
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  localIdentName: "[name]_[local]"
                }
              }
            ]
          }
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: production ? "[name].prod.css" : "[name].css",
          chunkFilename: "[id].css"
        })
      ]
    }
  ];
};
