import { Router } from "express";
import {
  agregarUsuario,
  obtenerUsuarios,
} from "../controllers/users.controller.js";

const router = Router();

router.post("/", agregarUsuario);
router.get("/", obtenerUsuarios);

export default router;
