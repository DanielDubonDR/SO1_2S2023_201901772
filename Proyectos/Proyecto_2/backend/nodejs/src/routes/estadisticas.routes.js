import { Router } from "express";
import { getAll, getAprobacion, getCantidadAlumnos, getPromedio } from "../controllers/estadisticas.controller.js";

const router = Router();

router.get("/registros", getAll);
router.get("/promedios/:semestre", getPromedio);
router.get("/alumnos/:semestre", getCantidadAlumnos);
router.get("/aprobacion/:semestre/:curso", getAprobacion);

export default router;