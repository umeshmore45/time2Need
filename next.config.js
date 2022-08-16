/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "",
    DELIVERY_TOKEN: "",
    ENVIROMENT_NAME: "development",
    MANAGEMENT_TOKEN: "",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
