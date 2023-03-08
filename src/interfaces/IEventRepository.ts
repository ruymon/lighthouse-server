import { Event } from "../entities/Event";

export interface IEventRepository {
  getAllEvents(): Promise<Event[]>;
  getEventById(eventId: string): Promise<Event | null>;
  createEvent(event: Event): Promise<Event>;
  updateEvent(event: Event): Promise<Event>;
  deleteEvent(eventId: string): Promise<void>;
}
