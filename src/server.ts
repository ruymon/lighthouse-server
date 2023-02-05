import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { auth } from './middlewares/authenticationMiddleware';

const app = express();

dotenv.config();

app.use(express.json());
app.use(auth);

app.get('/me', async (req: Request, res: Response) => {
    res.json(req.user);
});

app.listen(3333, () => {
    console.log('🚀 Server is running!');
});