
import express, { Request, Response, NextFunction } from 'express';
import { login, perfil } from './controllers/userController';
import { authenticateToken } from './middlewares/authMiddleware';

const app = express();

app.use(express.json()); 


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
}); 
app.post('/login', login);
app.get('/perfil', authenticateToken, perfil); 

export default app;