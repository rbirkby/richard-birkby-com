export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy({ _headers: "_headers" });

  // Posts excluding historical versions
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByTag("post").filter((item) => !item.data.versionOf),
  );

  // All historical versions across all posts
  eleventyConfig.addCollection("postVersions", (api) =>
    api.getAll().filter((item) => item.data.versionOf),
  );

  // Return versions for a given canonical post URL, sorted oldest first
  eleventyConfig.addFilter("versionsOf", (versions, url) =>
    versions
      .filter((v) => v.data.versionOf === url)
      .sort((a, b) => a.data.version - b.data.version),
  );

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("dateDisplay", (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  );

  eleventyConfig.addFilter("dateISO", (date) => new Date(date).toISOString().split("T")[0]);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
