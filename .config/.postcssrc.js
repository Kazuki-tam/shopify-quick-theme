const MODE = process.env.NODE_ENV;

module.exports = () => ({
  map: false,
  plugins: {
    "autoprefixer": {
      grid: "autoplace",
    },
    "cssnano": MODE === "production" ? { preset: "default" } : false
  },
  autoprefixer: {
    browsers: "last 2 versions"
  },
})
