import {Request, Response} from 'express'
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  private createUserUseCase: CreateUserUseCase
  constructor( createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {name, email, password} = request.body;

    try {
      const resp = await this.createUserUseCase.execute({name, email, password})
      response.status(201).json({resp}) 
    } catch (error) {
      return response.status(
        error.status || 400
      ).json({
        message: error.message || 'Unexpected Error'
      })
    }
  }
}