export const getDataModules = async (req, res) => {
    res.json({ message: "getDataModules" });
}

export const setIP = async (req, res) => {
    const ipAddress = req.header('x-forwarded-for')  || req.socket.remoteAddress;
    const ip = ipAddress.split(":")[3];
    console.log(ip);
    const state = true;
    res.status(200).json({ state });
}