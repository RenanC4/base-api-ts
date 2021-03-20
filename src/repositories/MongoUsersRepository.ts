import { User } from "../entities/User";
import { UsersRepository } from "./UsersRepository";

export class MongoUsersRepository implements UsersRepository{
  private users: User[] = []
  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user
  }
  async save(user: User): Promise<void> {
    this.users.push(user)
  }
  create(item: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string, item: User): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  find(item: User): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
 
}