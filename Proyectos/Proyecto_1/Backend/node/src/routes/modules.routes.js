import { Router } from "express";
import { getDataModules, getVMs, killTask, setIP } from "../controllers/modules.controller.js";

const router = Router();

router.get("/getDataModules/:ip", getDataModules);
router.get("/setIP", setIP);
router.get("/getVMs", getVMs);
router.get("/killTask/:ip/:pid", killTask);

export default router;