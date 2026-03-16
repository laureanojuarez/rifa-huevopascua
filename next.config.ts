import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["sequelize", "pg", "pg-hstore"],
};

export default nextConfig;
