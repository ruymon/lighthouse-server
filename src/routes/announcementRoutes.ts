import { Router } from "express";
import { AnnouncementController } from "../controllers/AnnouncementController";

const routes = Router();
const announcementController = new AnnouncementController();

routes.get('/list', announcementController.list);
routes.post('/create', announcementController.create);
routes.put('/update', announcementController.update);
routes.delete('/delete/:id', announcementController.delete);
routes.get('/getById/:id', announcementController.getById);

export default routes;