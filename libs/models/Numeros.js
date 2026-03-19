import { DataTypes } from "sequelize";
import sequelize from "../db.js";

export const Numeros = sequelize.define("numeros", {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "users",
      key: "id",
    },
  },
});
