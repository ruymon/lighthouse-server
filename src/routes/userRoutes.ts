import { Request, Response, Router } from "express";

const routes = Router();

routes.get('/me', async (req: Request, res: Response) => {
  res.json(req.user);
});

export default routes;