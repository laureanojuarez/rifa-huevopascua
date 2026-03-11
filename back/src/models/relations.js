import { Numeros } from "./Numeros.js";
import { User } from "./Users.js";

User.hasMany(Numeros);
Numeros.belongsTo(User);
