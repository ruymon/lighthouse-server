import { Room } from "./Room";
import { User } from "./User";

export interface Booking {
  id: string;
  startTime: Date;
  endTime: Date;
  room: Room;
  roomId: string;
  user: User;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
