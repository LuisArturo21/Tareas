import { Request, Response } from "express";
import Publicacion from "../models/Publicacion";

export const crearPublicacion = async (req: Request, res: Response) => {
    const { titulo, contenido } = req.body;
    try {
        const nuevaPublicacion = new Publicacion({ 
            titulo, 
            contenido, 
            autor: (req as any).user.id 
        });
        await nuevaPublicacion.save();
        res.status(201).json(nuevaPublicacion);
    } catch (error) {
        res.status(500).json({ error: "Error al crear publicación" });
    }
};

export const listarPublicaciones = async (req: Request, res: Response) => {
    try {
        const publicaciones = await Publicacion.find().populate("autor", "nombre email");
        res.json(publicaciones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener publicaciones" });
    }
};
