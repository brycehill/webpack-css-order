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
              // MiniCssExtractPlugin is not necessary to replicate this issue.
              // I added it as it is easier to view the order of the generated CSS.
              // However, you can still see the issue by searching for the generated
              // class names in the .js bundle. They're still out of order.
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
      optimization: {
        minimize: false
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
