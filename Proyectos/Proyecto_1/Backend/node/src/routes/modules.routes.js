import { Router } from "express";
import { getDataModules, setIP } from "../controllers/modules.controller.js";

const router = Router();

router.get("/getDataModules", getDataModules);
router.get("/setIP", setIP);

export default router;