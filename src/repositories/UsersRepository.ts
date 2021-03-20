import { BaseRepository } from "../base/BaseRepository";
import { User } from "../entities/User";

export interface UsersRepository extends BaseRepository<User> {
  findByEmail(email: string) : Promise<User>
  save(user: User): Promise<void>
}  