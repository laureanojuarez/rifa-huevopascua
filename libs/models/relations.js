import { Numeros } from "./Numeros.js";
import { Usuarios } from "./Usuarios.js";

Usuarios.hasMany(Numeros, { foreignKey: "usuario_id" });
Numeros.belongsTo(Usuarios, { foreignKey: "usuario_id" });

export { Numeros, Usuarios };
