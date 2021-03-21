import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { getAllUsersControler } from "./useCases/GetAllUsers";

const router = Router()

router.post('/', function(req, res) {
  return createUserController.handle(req, res)
});

router.get('/users', function(req, res) {
  return getAllUsersControler.handle(req, res)
});

export {router}