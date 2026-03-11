import { DataTypes } from "sequelize";
import { sequelize } from "../../server.js";

export const Numeros = sequelize.define("numeros", {
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "users",
      key: "id",
    },
  },
});
