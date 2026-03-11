import { User } from "../models/Users.js";

export const agregarUsuario = async (req, res) => {
  try {
    const { nombre, apellido, apodo } = req.body;
    const nuevoUsuario = await User.create({ nombre, apellido, apodo });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar usuario" });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.findAll();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};
