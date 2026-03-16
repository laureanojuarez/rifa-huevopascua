import { Router } from "express";
import {
  obtenerNumeros,
  asignarNumero,
} from "../controllers/numeros.controller.js";

const router = Router();

router.get("/", obtenerNumeros);
router.put("/:numero", asignarNumero);

export default router;
