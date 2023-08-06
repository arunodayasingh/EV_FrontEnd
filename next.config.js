/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
      locales: ["en", "hi"],
      defaultLocale: "en",
    },

    async rewrites() {
      return [
  
        {
          source: "/",
          destination: "/",
        },
       
      ];
    },
  };
  
  module.exports = nextConfig;
  