import { Router } from "express";
import { EventController } from "../controllers/EventController";
import { validateIsAdminMiddleware } from "../middlewares/validateIsAdminMiddleware";

const routes = Router();
const eventController = new EventController();

// Public routes
routes.get('/list', eventController.list);
routes.get('/getById/:id', eventController.getById);

// Protects routes
routes.use(validateIsAdminMiddleware);

routes.post('/create', eventController.create);
routes.put('/update', eventController.update);
routes.delete('/delete/:id', eventController.delete);

export default routes;