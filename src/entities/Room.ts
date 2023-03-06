import { Booking } from "./Booking";

export interface Room {
  id: string;
  name: string;
  description: string;
  bannerImage: string;
  capacity: number;
  restricted: boolean;
  createdAt: Date;
  updatedAt: Date;
  booking: Booking[];
};
