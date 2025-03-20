import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    const { nombre, email, contraseña, rol } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        const newUser = new User({ nombre, email, contraseña: hashedPassword, rol });
        await newUser.save();
        res.status(201).json({ mensaje: "Usuario registrado" });
    } catch (error) {
        res.status(500).json({ error: "Error en el registro" });
    }
};

export const login = async (req: Request, res: Response) :Promise<any> => {
    const { email, contraseña } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !await bcrypt.compare(contraseña, user.contraseña)) {
            return res.status(401).json({ error: "Credenciales incorrectas" });
        }
        const token = jwt.sign({ id: user.id, rol: user.rol }, process.env.JWT_SECRET as string, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Error en la autenticación" });
    }
};
