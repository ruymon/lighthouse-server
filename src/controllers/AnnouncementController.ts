import { Request, Response } from "express";
import { AnnouncementRepository } from "../repositories/AnnouncementRepository";

const announcementRepository = new AnnouncementRepository();

export class AnnouncementController {
  async list (req: Request, res: Response) {    
    try {
      const announcements = await announcementRepository.getAllAnnouncements();
      res.json(announcements);
    }
    catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async create (req: Request, res: Response) {
    try {
      const announcement = await announcementRepository.createAnnouncement(req.body);
      res.status(201).json(announcement);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async update (req: Request, res: Response) {
    try {
      const announcement = await announcementRepository.updateAnnouncement(req.body);
      res.status(201).json(announcement);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async delete (req: Request, res: Response) {
    try {
      const announcement = await announcementRepository.deleteAnnouncement(req.params.id);
      res.status(204).json(announcement);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async getById (req: Request, res: Response) {
    try {
      const announcement = await announcementRepository.getAnnouncementById(req.params.id);
      res.status(200).json(announcement);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

}