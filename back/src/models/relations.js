import { Numeros } from "./Numeros.js";
import { User } from "./Users.js";

User.hasMany(Numeros, { foreignKey: "user_id" });
Numeros.belongsTo(User, { foreignKey: "user_id" });
