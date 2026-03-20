import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export const Usuarios = sequelize.define("usuarios", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  apodo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
