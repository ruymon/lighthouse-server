import { prisma } from "../config/prisma";
import { Event } from "../entities/Event";
import { IEventRepository } from "../interfaces/IEventRepository";


export class EventRepository implements IEventRepository {
  async getAllEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getEventById(eventId: string): Promise<Event | null> {
    return await prisma.event.findUnique({
      where: {
        id: eventId,
      },
    });
  }

  async createEvent(event: Event): Promise<Event> {
    return await prisma.event.create({
      data: event,
    });
  }

  async updateEvent(event: Event): Promise<Event> {
    return await prisma.event.update({
      where: {
        id: event.id,
      },
      data: event,
    });
  }

  async deleteEvent(eventId: string): Promise<void> {
    await prisma.event.delete({
      where: {
        id: eventId,
      },
    });
  }
  
};
