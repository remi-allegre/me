import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a fully static site in `out/` for GitHub Pages.
  output: "export",

  // Project Pages are served from https://remi-allegre.github.io/me,
  // so assets and links must be prefixed with `/me`.
  // When the custom domain (www.iamreal.fyi) is wired up, delete these
  // two lines — a custom domain serves from the root.
  basePath: "/me",
  assetPrefix: "/me",

  // GitHub Pages resolves /books -> /books/index.html cleanly.
  trailingSlash: true,

  // The default image loader needs a server; static export can't use it.
  images: { unoptimized: true },
};

export default nextConfig;
