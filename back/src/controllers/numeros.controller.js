import { Numeros } from "../models/Numeros.js";
import { User } from "../models/Users.js";

// GET /numeros — todos los números con su dueño
export const obtenerNumeros = async (req, res) => {
  const numeros = await Numeros.findAll({
    include: User,
    order: [["numero", "ASC"]],
  });
  res.json(numeros);
};

// PUT /numeros/:numero — asignar a un usuario
export const asignarNumero = async (req, res) => {
  const { numero } = req.params;
  const { userId } = req.body;
  const n = await Numeros.findByPk(numero);
  if (!n) return res.status(404).json({ error: "Número no existe" });
  if (n.userId) return res.status(400).json({ error: "Número ya tomado" });
  await n.update({ userId });
  res.json(n);
};
