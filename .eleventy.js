module.exports = function (eleventyConfig) {
  // copy assets from public/ directory to root of site build
  eleventyConfig.addPassthroughCopy({ public: "/" });
};
