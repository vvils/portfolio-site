/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
    loader: "custom",
    loaderFile: "./loader.js",
  },
  output: "export",
};

export default nextConfig;
