import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { crearPublicacion, listarPublicaciones } from "../controllers/publicacionController";

const router = express.Router();

router.post("/", authMiddleware, crearPublicacion);
router.get("/", authMiddleware, listarPublicaciones);

export default router;
