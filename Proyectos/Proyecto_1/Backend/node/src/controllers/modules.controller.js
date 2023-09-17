import { ipAddresses } from "../config/global.js";
import axios from "axios";

export const getDataModules = async (req, res) => {
    const ip = req.params.ip;

    try {
        const response = await axios.get(`http://${ip}:3000/getDataModules`);
        const data = response.data;
        res.status(200).json({ data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
}

export const setIP = async (req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    const ip = ipAddress.split(":")[3];
    console.log(ip);

    if (!ipAddresses.has(ip)) {
        ipAddresses.add(ip);
        console.log(`La IP ${ip} ha sido registrada.`);
    }

    console.log(ipAddresses);

    const state = true;
    res.status(200).json({ state });
}

export const getVMs = async (req, res) => {

    // enviar las ipadress
    const ips = Array.from(ipAddresses);
    res.status(200).json({ ipAddresses: ips });
}

export const killTask = async (req, res) => {
    const ip = req.params.ip;
    const pid = req.params.pid;

    try {
        const response = await axios.get(`http://${ip}:3000/killProcess/${pid}`);
        const data = response.data;
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false });
    }
}