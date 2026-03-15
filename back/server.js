import { Sequelize } from "sequelize";
try { process.loadEnvFile(); } catch (e) { /* ignore on production */ }

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});
