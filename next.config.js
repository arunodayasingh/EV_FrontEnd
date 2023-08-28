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
        {
          source: "/:fueltype",
          destination: "/:fueltype",
        },
        {
          source: "/:fueltype/:category",
          destination: "/:fueltype/:category",
        },
        {
          source: "/:fueltype/:category/:brand",
          destination: "/:fueltype/:category/:brand",
        },
        {
          source: "/:fueltype/:category/:brand/:model",
          destination: "/:fueltype/:category/:brand/:model",
        },
        {
          source: "/:fueltype/:category/:brand/:model/:varaint",
          destination: "/:fueltype/:category/:brand/:model/:varaint",
        },
        {
          source: "/latest-:fueltype",
          destination: "/:fueltype/latest",
        },
        {
          source: "/upcoming-:fueltype",
          destination: "/:fueltype/upcoming",
        },
        {
          source: "/popular-:fueltype",
          destination: "/:fueltype/popular",
        },
        {
          source: "/latest-:fueltype/:category",
          destination: "/:fueltype/:category/latest",
        },
        {
          source: "/upcoming-:fueltype/:category",
          destination: "/:fueltype/:category/upcoming",
        },
        {
          source: "/popular-:fueltype/:category",
          destination: "/:fueltype/:category/popular",
        }

       
      ];
    },
  };
  
  module.exports = nextConfig;
  