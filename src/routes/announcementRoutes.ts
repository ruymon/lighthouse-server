import { Router } from "express";
import { AnnouncementController } from "../controllers/AnnouncementController";
import { validateIsAdminMiddleware } from "../middlewares/validateIsAdminMiddleware";

const routes = Router();
const announcementController = new AnnouncementController();

// Public routes
routes.get('/list', announcementController.list);
routes.get('/getById/:id', announcementController.getById);

// Protects routes
routes.use(validateIsAdminMiddleware);

routes.post('/create', announcementController.create);
routes.put('/update', announcementController.update);
routes.delete('/delete/:id', announcementController.delete);

export default routes;