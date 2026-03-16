import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_URL || "postgres://dummy:dummy@localhost/dummy", {
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})
