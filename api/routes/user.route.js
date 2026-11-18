import { Router } from "express";
import { testRouter } from "../controllers/user.controller.js";

const router = Router();

router.get('/test', testRouter);

export default router;