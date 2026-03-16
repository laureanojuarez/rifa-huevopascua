import { DataTypes } from "sequelize";
import sequelize from "../db";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apodo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
