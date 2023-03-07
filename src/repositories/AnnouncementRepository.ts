import { prisma } from "../config/prisma";
import { Announcement } from "../entities/Announcement";
import { IAnnouncementRepository } from "../interfaces/IAnnouncementRepository";

export class AnnouncementRepository implements IAnnouncementRepository {
  async getAllAnnouncements(): Promise<Announcement[]> {
    return await prisma.announcement.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  
  async getAnnouncementById(announcementId: string): Promise<Announcement | null> {
    return await prisma.announcement.findUnique({
      where: {
        id: announcementId,
      },
    });
  }
  
  async createAnnouncement(announcement: Announcement): Promise<Announcement> {
    return await prisma.announcement.create({
      data: announcement,
    });
  }

  async updateAnnouncement(announcement: Announcement): Promise<Announcement> {
    return await prisma.announcement.update({
      where: {
        id: announcement.id,
      },
      data: announcement,
    });
  }
  
  async deleteAnnouncement(announcementId: string): Promise<Announcement> {
    return await prisma.announcement.delete({
      where: {
        id: announcementId,
      },
    });
  }
}
