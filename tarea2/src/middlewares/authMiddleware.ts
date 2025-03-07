
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config(); 

interface AuthRequest extends Request {
  user?: any; 
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): any => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET no está definida en las variables de entorno.");
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next(); // Continúa 
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};