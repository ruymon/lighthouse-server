import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { authenticationMiddleware } from './middlewares/authenticationMiddleware';
import { syncUserMiddleware } from './middlewares/syncUserMiddleware';

import announcementRoutes from './routes/announcementRoutes';
import eventRoutes from './routes/eventRoutes';
import uploadRoutes from './routes/uploadRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use(authenticationMiddleware);
app.use(syncUserMiddleware);

app.use('/users', userRoutes);
app.use('/announcements', announcementRoutes);
app.use('/uploads', uploadRoutes);
app.use('/events', eventRoutes);

app.listen(3333, () => {
    console.log('🚀 Server is running!');
});