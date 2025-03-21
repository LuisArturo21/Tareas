import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { crearPublicacion, listarPublicaciones } from "../controllers/publicacionController";
import { verificarRol } from "../middleware/roleMiddleware";


const router = express.Router();

router.post("/publicaciones", authMiddleware,verificarRol("admin"), crearPublicacion);
router.get("/publicaciones", authMiddleware,verificarRol("admin"), listarPublicaciones);

export default router;
