import { Router } from "express";
import { getDataModules, getHistory, getIpsVMsHistory, getVMs, killTask, setIP } from "../controllers/modules.controller.js";

const router = Router();

router.get("/getDataModules/:ip", getDataModules);
router.get("/setIP", setIP);
router.get("/getVMs", getVMs);
router.get("/killProcess/:ip/:pid", killTask);
router.get("/getIPsHistory", getIpsVMsHistory);
router.get("/getHistory/:ip", getHistory);

export default router;