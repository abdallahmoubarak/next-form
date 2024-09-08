/** @type {import('next').NextConfig} */
const nextConfig = {
  unstable_allowDynamic: [
    "./auth.config.ts",
    "./lib/models/user.model.ts",
    "./node_modules/mongoose/dist/browser.umd.js",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
