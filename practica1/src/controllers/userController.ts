import { Request, Response } from "express";
import User from "../models/User";

export const listUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select("-contraseña");
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};

export const getUser = async (req: Request, res: Response) : Promise<any> => {
    try {
        const user = await User.findById(req.params.id).select("-contraseña");
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener usuario" });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-contraseña");
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar usuario" });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ mensaje: "Usuario eliminado" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar usuario" });
    }
};
