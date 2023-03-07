import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { syncUserMiddleware } from './middlewares/syncUserMiddleware';

import { authenticationMiddleware } from './middlewares/authenticationMiddleware';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(authenticationMiddleware);
app.use(syncUserMiddleware);

app.get('/me', async (req: Request, res: Response) => {
    res.json(req.user);
});

app.listen(3333, () => {
    console.log('🚀 Server is running!');
});