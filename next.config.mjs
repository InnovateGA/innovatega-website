/** @type {import('next').NextConfig} */

// GitHub Pages serves from https://<user>.github.io/<repo>/ unless a custom
// domain is configured. The deploy workflow sets NEXT_PUBLIC_BASE_PATH:
//   - "/<repo>" for project-pages URLs
//   - ""        when a public/CNAME custom domain is present
const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? (envBase ?? "/innovatega") : "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
