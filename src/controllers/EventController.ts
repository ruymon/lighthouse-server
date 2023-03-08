import { Request, Response } from "express";
import { EventRepository } from "../repositories/EventRepository";

const eventRepository = new EventRepository();

export class EventController {
  async list (req: Request, res: Response) {
    try {
      const events = await eventRepository.getAllEvents();
      res.json(events);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async create (req: Request, res: Response) {
    try {
      const event = await eventRepository.createEvent(req.body);
      res.status(201).json(event);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async update (req: Request, res: Response) {
    try {
      const event = await eventRepository.updateEvent(req.body);
      res.status(201).json(event);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }

  async delete (req: Request, res: Response) {
    try {
      await eventRepository.deleteEvent(req.params.id);
      res.status(204).send();
    }
    catch (error) {
      res.status(500).json(error);
    }
  }
  
  async getById (req: Request, res: Response) {
    try {
      const event = await eventRepository.getEventById(req.params.id);
      res.status(200).json(event);
    }
    catch (error) {
      res.status(500).json(error);
    }
  }
}