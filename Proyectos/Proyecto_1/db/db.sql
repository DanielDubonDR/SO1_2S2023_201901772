CREATE TABLE IF NOT EXISTS VM_HISTORY(
    ip VARCHAR(16) NOT NULL,
    percentajeRAM FLOAT NOT NULL,
    ramUsada INT NOT NULL,
    ramLibre INT NOT NULL,
    ramDisponible INT NOT NULL,
    ramBuffers INT NOT NULL,
    ramCache INT NOT NULL,
    percentajeCPU FLOAT NOT NULL,
    nameCPU VARCHAR(100) NOT NULL,
    numCores INT NOT NULL,
    fechaHora TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP()
);