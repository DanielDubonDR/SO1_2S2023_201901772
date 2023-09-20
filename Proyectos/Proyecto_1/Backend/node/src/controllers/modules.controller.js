import { ipAddresses } from "../config/global.js";
import { pool } from "../db/dbConnection.js";
import axios from "axios";

export const getDataModules = async (req, res) => {
    const ip = req.params.ip;

    try {
        const response = await axios.get(`http://${ip}:3000/getDataModules`);
        const data = response.data;

        const { RAM, CPU } = data;

        const percentajeRAM = ((RAM.ramUsada * 100) / RAM.ramTotal).toFixed(2);
        const percentajeCPU = CPU.cpu_percentaje.toFixed(2);

        const { ramUsada, ramLibre, ramDisponible, ramBuffers, ramCache } = RAM;
        const { name_cpu, num_cores } = CPU;
        
        await pool.query("INSERT INTO VM_HISTORY (ip, ramUsada, ramLibre, ramDisponible, ramBuffers, ramCache, percentajeRAM, percentajeCPU, nameCPU, numCores) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [ip, ramUsada, ramLibre, ramDisponible, ramBuffers, ramCache, percentajeRAM, percentajeCPU, name_cpu, num_cores]);

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

export const getIpsVMsHistory = async (req, res) => {
    const query = `SELECT DISTINCT ip FROM VM_HISTORY`;
    const response = await pool.query(query);

    console.log(response);

    if (response[0].length === 0) {
        return res.status(404).json({ status: false });
    }
    
    return res.status(200).json({ status: true, ips: response[0]});
}

export const getHistory = async (req, res) => {
    const ip = req.params.ip;

    const query = `SELECT * FROM VM_HISTORY WHERE ip = '${ip}'`;
    const response = await pool.query(query);

    if (response[0].length === 0) {
        return res.status(404).json({ status: false });
    }
    
    return res.status(200).json({ status: true, history: response[0]});
}