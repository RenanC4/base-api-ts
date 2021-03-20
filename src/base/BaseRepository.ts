import { Read, Write } from "./repository"

export abstract class BaseRepository<T> implements Write<T>, Read<T> {

  constructor(){}
  async create(item: T): Promise<boolean> {
    const result = 1
    return !!result
  }

  
  update(id: string, item: T): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
  find(item: T): Promise<T[]> {
    throw new Error("Method not implemented.")
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.")
  }

}
