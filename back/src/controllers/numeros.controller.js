import { Numeros } from "../models/Numeros.js";
import { User } from "../models/Users.js";

// GET /numeros — todos los números con su dueño
export const obtenerNumeros = async (req, res) => {
  try {
    const numeros = await Numeros.findAll({
      include: {
        model: User,
        attributes: ["id", "nombre", "apellido", "apodo"],
      },
      order: [["numero", "ASC"]],
    });
    res.json(numeros);
  } catch (error) {
    console.error("Error al obtener los números:", error);
    res.status(500).json({ error: "Error interno del servidor al obtener los números." });
  }
};

// PUT /numeros/:numero — asignar a un usuario
export const asignarNumero = async (req, res) => {
  try {
    const { numero } = req.params;
    const { userId } = req.body;
    const n = await Numeros.findByPk(numero);
    if (!n) return res.status(404).json({ error: "Número no existe" });
    if (n.user_id) return res.status(400).json({ error: "Número ya tomado" });
    await n.update({ user_id: userId });
    res.json(n);
  } catch (error) {
    console.error(`Error al asignar el número ${req.params.numero}:`, error);
    res.status(500).json({ error: "Error interno del servidor al asignar el número." });
  }
};
