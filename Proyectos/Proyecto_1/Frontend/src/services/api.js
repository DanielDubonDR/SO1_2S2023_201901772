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
    const response = await axios.get(`http://${API_URL}/killProcess/${ip}/${pid}`);
    return response.data;
}

export const getIPsHistory = async() => {
    const response = await axios.get(`http://${API_URL}/getIPsHistory`);
    return response.data;
}

export const getHistory = async(ip) => {
    const response = await axios.get(`http://${API_URL}/getHistory/${ip}`);
    return response.data;
}