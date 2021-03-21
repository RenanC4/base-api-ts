import axios from 'axios'
import { AxiosProvider } from '../../providers/implementations/AxiosProvider'
import {allUsersUrl} from '../../config/config'
import GetAllUsersUseCase from './GetAllUsersUseCase'
import { GetAllUsersController } from './GetAllUsersController'


const axiosProvider = new AxiosProvider(axios)
const getAllUsersUseCase = new GetAllUsersUseCase(axiosProvider, allUsersUrl)
const getAllUsersControler = new GetAllUsersController(getAllUsersUseCase)

export {getAllUsersControler, getAllUsersUseCase}