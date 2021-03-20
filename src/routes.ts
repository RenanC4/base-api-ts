import { Router } from "express";

const router = Router()

router.get('/health', function(req, res) {
  return res.status(200).json({status: 'UP'});
});

export {router}