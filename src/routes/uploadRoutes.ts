import { Router } from "express";
import { UploadController } from "../controllers/UploadController";
import { validateIsAdminMiddleware } from "../middlewares/validateIsAdminMiddleware";
import { uploadImageParser } from "../services/cloudinary";

const routes = Router();
const uploadController = new UploadController();

// Protects routes
routes.use(validateIsAdminMiddleware);

routes.post('/', uploadImageParser.single('image'), uploadController.uploadFile);

export default routes;