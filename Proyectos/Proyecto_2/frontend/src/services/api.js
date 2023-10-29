import axios from "axios";

const API_URL = import.meta.env.VITE_URL;

export const getRegistros = async() => {
    const response = await axios.get(`http://${API_URL}/estadisticas/registros`);
    return response.data;
};

export const getAprobacion = async(semestre, curso) => {
    const response = await axios.get(`http://${API_URL}/estadisticas/aprobacion/${semestre}/${curso}`);
    return response.data;
};

export const getAlumnos = async(semestre) => {
    const response = await axios.get(`http://${API_URL}/estadisticas/alumnos/${semestre}`);
    return response.data;
}

export const getPromedios = async(semestre) => {
    const response = await axios.get(`http://${API_URL}/estadisticas/promedios/${semestre}`);
    return response.data;
}