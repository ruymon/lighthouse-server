import { NextFunction, Request, Response } from "express";
import { LayersService } from "../services/layers";

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { communityId, userId, session } = req.query as any;
  
  const layersService = new LayersService(communityId);

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized: No session' });
  }

  try {
    await layersService.validateUser(userId, communityId, session);
  }
  catch (err) {
    return console.error(err)
  }

  const user = await layersService.getUserById(userId);
  
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized: No user' });
  }

  req.user = user;

  return next();
};