/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    loader: "custom",
    loaderFile: "./loader.js",
  },
  output: "export",
  basePath: "/Portfolio-Site",
};

export default nextConfig;
