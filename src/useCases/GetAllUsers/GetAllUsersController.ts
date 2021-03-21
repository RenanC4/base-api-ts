import {Request, Response} from 'express'
import GetAllUsersUseCase from "./GetAllUsersUseCase";

export class GetAllUsersController {
  private getAllUsersUseCase: GetAllUsersUseCase

  constructor(getAllUsersUseCase: GetAllUsersUseCase) {
    this.getAllUsersUseCase = getAllUsersUseCase
  }


  async handle(request: Request, response: Response) : Promise<Response> {
    try {
      const resp = await this.getAllUsersUseCase.execute()
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