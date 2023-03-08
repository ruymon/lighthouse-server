import { Request, Response } from "express";

export class UploadController {
  async uploadFile (req: Request, res: Response) { 
    try {
      const file = req.file;

      if (!file) {
        return res.status(400).json({ message: 'Please upload a file' });
      }
      
      res.status(201).json(file);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }
};
