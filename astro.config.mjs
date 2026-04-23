import { defineConfig } from "astro/config";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  site: "https://speeson.github.io",
  base,
  output: "static"
});
