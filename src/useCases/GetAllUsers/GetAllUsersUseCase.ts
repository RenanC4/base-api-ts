import { RestProvider } from "../../providers/RestProvider";
import { GEO, GetAllUsersDTO, UserAddress } from "./GetAllUsersDTO";

export default class GetAllUsersUseCase {
  private restProvider: RestProvider<any>
  private getAllUsersURL: string

  constructor(restProvider: RestProvider<any>, getAllUsersURL: string) {
    this.restProvider = restProvider
    this.getAllUsersURL = getAllUsersURL
  }

  async execute() {
    const {data} =  await this.restProvider.get(this.getAllUsersURL)
    
    const allUsers: GetAllUsersDTO[] = data
    const userOne: GetAllUsersDTO = allUsers[0]
    const name = userOne.name
    const address: UserAddress = userOne.address
    const GEO: GEO = address.geo
    const lat = GEO.lat
    
    return lat
  }
}