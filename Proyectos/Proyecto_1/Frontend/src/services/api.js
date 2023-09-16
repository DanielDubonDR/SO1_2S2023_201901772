import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getVMs = async() => {
    const response = await axios.get(`http://${API_URL}/getVMs`);
    return response.data;
};

export const getDataModules = async(ip) => {
    const response = await axios.get(`http://${API_URL}/getDataModules/${ip}`);
    return response.data;
};

export const killTask = async(ip, pid) => {
    const response = await axios.get(`http://${API_URL}/killTask/${ip}/${pid}`);
    return response.data;
}