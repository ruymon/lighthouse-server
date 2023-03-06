import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";

export const syncUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;

  const userRepository = new UserRepository();
  const userExists = await userRepository.getUserById(user.id);

  const userObject = {
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: userExists?.isAdmin || false,
  };
  
  if (!userExists) {
    await userRepository.createUser(userObject);
  } else {
    await userRepository.updateUser(userObject);
  }
  
  return next();
};
