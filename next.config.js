/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: "blt8acc25df64f80269",
    DELIVERY_TOKEN: "cse6dcef6a446460bfcecf29a3",
    ENVIROMENT_NAME: "development",
    MANAGEMENT_TOKEN: "cs15801595a2ab6e4e058e05be",
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
