import { RestProvider } from "../RestProvider";

export class AxiosProvider implements RestProvider<any> {
   private axios: any

  constructor(axios: any) {
    this.axios = axios
  }

  async get(url: string): Promise<any> {
    const resp = await this.axios.get(url)

    return resp
  }

}