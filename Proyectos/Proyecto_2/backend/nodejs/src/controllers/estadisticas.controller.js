import { pool } from "../db/dbConnection.js"

export const getAll = async (req, res) => {
    try {
        const registros = await pool.query("SELECT * FROM NOTAS");
        res.status(200).json(registros);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener las notas" });
    }
}

export const getPromedio = async (req, res) => {
    try {
        // SELECT carnet, ROUND(AVG(nota), 2) as promedio, semestre FROM NOTAS WHERE semestre = '1S' GROUP BY carnet ORDER BY promedio ASC LIMIT 5;
        const registros = await pool.query("SELECT carnet, ROUND(AVG(nota), 2) as promedio FROM NOTAS WHERE semestre = ? GROUP BY carnet ORDER BY promedio DESC LIMIT 5", [req.params.semestre]);
        res.status(200).json(registros[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener el promedio" });
    }
}

export const getCantidadAlumnos = async (req, res) => {
    try {
        // SELECT curso, COUNT(carnet) as alumnos FROM NOTAS WHERE semestre = '1S' GROUP BY curso ORDER BY alumnos DESC LIMIT 3;
        const registros = await pool.query("SELECT curso, COUNT(carnet) as alumnos FROM NOTAS WHERE semestre = ? GROUP BY curso ORDER BY alumnos DESC LIMIT 3", [req.params.semestre]);
        res.status(200).json(registros[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener la cantidad de alumnos" });
    }
}

export const getAprobacion = async (req, res) => {
    try {

        const { semestre, curso } = req.params;

        const qr = `
        SELECT
            SUM(CASE WHEN nota > 60 THEN 1 ELSE 0 END) as aprobados,
            SUM(CASE WHEN nota <= 60 THEN 1 ELSE 0 END) as reprobados,
            COUNT(carnet) as total 
        FROM NOTAS 
        WHERE semestre = ?
        AND curso = ?
        `

        const registros = await pool.query(qr, [semestre, curso]);
        res.status(200).json(registros[0]);

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error al obtener la cantidad de alumnos" });
    }
}