const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/script.js", // Titik masuk utama
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true, // Membersihkan folder dist sebelum build
  },
  module: {
    rules: [
      {
        test: /\.css$/i, // Untuk file CSS
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Gunakan HTML dari folder src
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    open: true, // Buka otomatis di browser
    port: 3000, // Port server (boleh kamu ganti)
  },
  mode: "development", // Bisa diubah ke 'production' saat build final
};
