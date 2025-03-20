import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


interface middlewareRequest extends Request {
    user ? : any; 

}

export const authMiddleware = (req: middlewareRequest, res: Response, next: NextFunction) : any => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "Acceso denegado" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: "Token inválido" });
    }
};
