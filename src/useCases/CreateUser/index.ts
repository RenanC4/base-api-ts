import { AxiosProvider } from "../../providers/implementations/AxiosProvider";
import axios from 'axios'
import { MongoUsersRepository } from "../../repositories/MongoUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { githubUrl } from "../../config/config";

const axiosProvider = new AxiosProvider(axios)
const mongoUsersRepository = new MongoUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  axiosProvider,
  githubUrl
)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserUseCase, createUserController}