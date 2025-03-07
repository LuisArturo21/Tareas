
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

interface AuthRequest extends Request {
    user?: any;
}

export const login = (req: Request, res: Response): any => {
  const { email, password } = req.body;

  
  if (!email || !password) {
    return res.status(400).json({ message: 'Se requiere correo y contraseña.' });
  }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
        return res.status(500).json({ message: "Error interno del servidor. JWT_SECRET no definida." });
    }
    
    const token = jwt.sign({ email, password }, secret, { expiresIn: '1h' }); 
    res.json({ token });

};

export const perfil = (req: AuthRequest, res: Response): any => {
    
    if (!req.user) {
        return res.status(401).json({ message: "No autorizado." });
    }
    const { email, password } = req.user;
    res.json({ email, password });
};