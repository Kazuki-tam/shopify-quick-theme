const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath = `${__dirname}/shopify/assets`;

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV;
// Source map setting
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  // Entry point
  entry: {
    main: './src/ts/main.ts',
  },
  // Output files
  output: {
    path: publicPath,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              // 0 => no loaders;
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  target: ["web", "es5"],
};
