import { NextFunction, Request, Response } from "express";
import { LayersService } from "../services/layers";

export const authenticationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { communityId, userId, session } = req.query as { communityId: string, userId: string, session: string };
  
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

  // rename user._id to user.id for consistency
  user.id = user._id as any;
  delete user._id;
  
  req.layersUser = user;

  return next();
};