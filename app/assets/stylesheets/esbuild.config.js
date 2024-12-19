const esbuild = require("esbuild");
const postcss = require("postcss");
const postcssPlugins = require("./postcss.config.js");

esbuild
  .build({
    entryPoints: ["app/assets/stylesheets/application.tailwind.css"],
    bundle: true,
    outfile: "public/assets/application.css",
    plugins: [postcss({ plugins: postcssPlugins })],
  })
  .catch(() => process.exit(1));
