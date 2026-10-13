import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = isGitHubPages ? "/official_website" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: repositoryBasePath,
  },
};

export default nextConfig;
