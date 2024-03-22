const MODE = process.env.NODE_ENV;

module.exports = () => ({
  map: false,
  plugins: {
    'postcss-flexbugs-fixes': true,
    'autoprefixer': {
      grid: "autoplace",
    },
    'cssnano': MODE === 'production' ? { preset: 'default' } : false
  },
  autoprefixer: {
    browsers: "last 2 versions"
  },
})
