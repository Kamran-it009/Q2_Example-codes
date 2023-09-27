/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "fsfswzwrtaao",
    CONTENTFUL_ACCESS_KEY: "COVkRjb_6GIrFKnQpLgmzaFfEVyzuw0M4VWodG9sEp4",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
