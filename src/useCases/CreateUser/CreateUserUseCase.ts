
import { User } from "../../entities/User";
import { RestProvider } from "../../providers/RestProvider";
import { UsersRepository } from "../../repositories/UsersRepository";
import CreateUserRequestDTO from "./CreateUserDTO";

export class CreateUserUseCase {
  private usersRepository: UsersRepository
  private restProvider: RestProvider<User>
  private githubUrl: string

  constructor(
    usersRepository: UsersRepository, 
    restProvider: RestProvider<User>,
    githubUrl: string
    ) {
    this.usersRepository = usersRepository
    this.restProvider = restProvider
    this.githubUrl = githubUrl
  }

  async execute(data: CreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if(userAlreadyExists) {
      throw new Error('User already exists')
    }

    const user = new User(data)
     await this.usersRepository.save(user)
    const ue = 'debugger is running'
    return ue
  }
}