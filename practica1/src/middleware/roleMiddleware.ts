import { Request, Response, NextFunction } from "express";

interface middlewareRequest extends Request {
    user?: any;
}

export const verificarRol = (rolRequerido: string): any => {
    return (req: middlewareRequest, res: Response, next: NextFunction) => {
        if (req.user.rol !== rolRequerido) {
            return res.status(403).json({ error: "Acceso denegado, rol insuficiente" });
        }
        next();
    };
};
