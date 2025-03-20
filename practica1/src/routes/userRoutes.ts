import express from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { listUsers, getUser, updateUser, deleteUser } from "../controllers/userController";

const router = express.Router();

import { verificarRol } from "../middleware/roleMiddleware";

router.get("/", authMiddleware, verificarRol("admin"), listUsers);
router.get("/:id", authMiddleware, verificarRol("admin"), getUser);
router.put("/:id", authMiddleware, verificarRol("admin"), updateUser);
router.delete("/:id", authMiddleware, verificarRol("admin"), deleteUser);

export default router;
