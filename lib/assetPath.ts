// Mirrors the basePath logic in next.config.mjs so static-export images
// resolve correctly under GitHub Pages. next/image with unoptimized=true
// does not auto-prepend basePath, so we apply it ourselves.
const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH ?? "/innovatega"
    : "";

export const asset = (path: string) => `${basePath}${path}`;
