import path from "node:path";
import { defineConfig } from "@rspack/cli";

const assetsPath = path.resolve(__dirname, "../shopify/assets/");

// Set production or development via NODE_ENV
const MODE = process.env.NODE_ENV || "development";
// Source map setting
const enabledSourceMap = MODE === "development";

export default defineConfig({
  watchOptions: {
    ignored: /node_modules/,
  },
  // Entry point
  entry: {
    "custom-script": "./src/ts/main.ts",
  },
  // Output files
  output: {
    path: assetsPath,
    filename: "[name].js",
  },
  devtool: enabledSourceMap ? "source-map" : "eval-source-map",
});
