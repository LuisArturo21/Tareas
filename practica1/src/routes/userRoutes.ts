import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { listUsers, getUser, updateUser, deleteUser, createUser } from "../controllers/userController";

const router = express.Router();

import { verificarRol } from "../middleware/roleMiddleware";

router.post("/usuarios", authMiddleware, verificarRol("admin"), createUser);
router.get("/usuarios", authMiddleware, verificarRol("admin"), listUsers);
router.get("/usuarios/:id", authMiddleware, verificarRol("admin"), getUser);
router.put("/usuarios/:id", authMiddleware, verificarRol("admin"), updateUser);
router.delete("/usuarios/:id", authMiddleware, verificarRol("admin"), deleteUser);

export default router;
