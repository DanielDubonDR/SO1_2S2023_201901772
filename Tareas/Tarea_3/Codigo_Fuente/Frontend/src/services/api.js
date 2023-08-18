import axios from "axios";

const API_URL = "http://localhost:3000";

export const getBiblioteca = async() => {
    const response = await axios.get(`${API_URL}/getBiblioteca`);
    return response.data;
};

export const addMusic = async (music) => {
    const response = await axios.post(`${API_URL}/setMusic`, music);
    return response.data;
}