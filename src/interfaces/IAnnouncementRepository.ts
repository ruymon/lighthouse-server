import { Announcement } from "../entities/Announcement";

export interface IAnnouncementRepository {
  getAllAnnouncements(): Promise<Announcement[]>;
  getAnnouncementById(announcementId: string): Promise<Announcement | null>;
  createAnnouncement(announcement: Announcement): Promise<Announcement>;
  updateAnnouncement(announcement: Announcement): Promise<Announcement>;
  deleteAnnouncement(announcementId: string): Promise<Announcement>;
}