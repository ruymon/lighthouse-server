import { User } from "entities/User";

export interface IUserRepository {
  getUserById(userId: string): Promise<User | null>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
}