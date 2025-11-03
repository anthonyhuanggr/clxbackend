import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret:
        process.env.JWT_SECRET ||
        "51f263c68b801b100ee197c70941f4acd5ba0e69693e4fe84f42138da812faa7",
      cookieSecret:
        process.env.COOKIE_SECRET ||
        "d79564029fa3b180e00e5346a61f752b8815d9f46c9bbdd208d9161f49685430",
    },
  },
});
