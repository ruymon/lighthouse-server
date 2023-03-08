import { prisma } from "../config/prisma";
import { User } from "../entities/User";
import { IUserRepository } from "../interfaces/IUserRepository";


export class UserRepository implements IUserRepository {
  async getUserById(userId: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
  }
  
  async createUser(user: User): Promise<User> {
    return await prisma.user.create({
      data: user,
    });
  }

  async updateUser(user: User): Promise<User> {
    return await prisma.user.update({
      where: {
        id: user.id,
      },
      data: user,
    });
  }
}