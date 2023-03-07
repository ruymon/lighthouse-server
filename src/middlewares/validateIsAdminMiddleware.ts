import { NextFunction, Request, Response } from "express";

export const validateIsAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.user;
  
  if (!user.isAdmin) {
    return res.status(401).json({
      message: 'Unauthorized: User is not system administrator.',
    });
  }
  
  return next();
}