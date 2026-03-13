import { Sequelize } from "sequelize";
process.loadEnvFile()

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});
