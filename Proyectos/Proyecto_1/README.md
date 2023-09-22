# 📑 MANUAL TÉCNICO [SO1]P1_201901772

```bash
Universidad de San Carlos de Guatemala
Facultad de Ingeniería
Escuela de Ciencias y Sistemas
Laboratorio Sistemas de Bases de Datos 1
Ing. Jesus Guzman Polanco
Aux. José DANIEL Velásquez Orozco
Aux. Jhonathan Daniel Tocay

Carné: 201901772
Nombre: Daniel Reginaldo Dubón Rodríguez
```
# Plataforma de Monitoreo en GCP

## Modulos Kernel

***Tecnologías Utilizadas:*** Lenguaje de Programación C, Makefile, GCC v12, Linux 6.2.0-33-generic

- [`MODULO CPU`](./Modules/CPU/cpu_201901772.c)

  Este modulo permite obtener la información de la CPU del sistema operativo, como lo son el número de núcleos, el porcentaje de uso y los procesos que se están ejecutando en el momento.



    Cada proceso muestra la siguiente información:

    - **PID** Identificador del Proceso
    - **Nombre** del Proceso
    - **Usuario** que ejecuto el Proceso
    - **Estado** en el que se encuentra el Proceso
    - **Memoria RAM** memoria ram consumida por cada proceso
    - **%RAM** que utiliza el proceso

    La salida de este modulo es en formato json la cual se representa de esta forma:

    ```json
    {
        "cpu_percentaje": 20,
        "num_cores": 12,
        "total_ram": 16137712,
        "processes":[
            {
                "pid": 1,
                "name": "systemd",
                "user": 0,
                "state": "1 - Interruptible",
                "ram_memory": 13568,
                "ram_porcentaje": 0,
                "childs":[
                    {
                        "pid": 301,
                        "name": "systemd-journal",
                        "user": 0,
                        "state": "1 - Interruptible",
                        "pid_parent": 1,
                        "ram_memory": 30848,
                        "ram_porcentaje": 0
                    },
                    "... more childs"
                ]
            },
            "... more processes"
        ],
	    "total_processes": 365
    }
    ```

- [`MODULO RAM`](./Modules/RAM/ram_201901772.c)

    Este modulo permite obtener la información de la RAM del sistema operativo, como lo son la cantidad total de RAM, la cantidad de RAM usada, la cantidad de RAM libre, la cantidad de RAM disponible, la cantidad de RAM en buffers, la cantidad de RAM en cache y el porcentaje de RAM usada.

    La salida de este modulo es en formato json la cual se representa de esta forma:

    ```json
    {
        "ramTotal": 15759,
        "ramUsada": 4390,
        "ramLibre": 5097,
        "ramDisponible": 10437,
        "ramBuffers": 224,
        "ramCache": 6048,
        "ramPorcentaje": 27
    } 
    ```

    ### Instalacion de los Modulos

    Ambos modulos fueron realizados en el lenguaje de programación C y compilados con el compilador GCC v12 y Makefile. Para la ejecución de los modulos se debe de tener instalado el kernel de Linux 6.2.0-33-generic.

    Comandos que pueden servir para la compilación de los modulos:

    ```bash
    sudo apt-get install linux-headers-$(uname -r)
    sudo apt-get install build-essential
    sudo apt-get install make

    ```

  - **COMPILACION DE LOS MODULOS**
    
    Para la compilación de cada uno de los modulos debe ubicarse en la carpeta del modulo y ejecutar el siguiente comando:

    ```bash
    make
    ```

    Esto generara un archivo con extensión .ko el cual es el modulo compilado.

  - **INSTALACION DE LOS MODULOS**
    
    Para la instalación de los modulos se debe de ejecutar el siguiente comando:

    ```bash
    sudo insmod <nombre_modulo>.ko
    ```

    Esto instalara el modulo en el kernel de Linux.

  - **DESINSTALACION DE LOS MODULOS**

    Para la desinstalación de los modulos se debe de ejecutar el siguiente comando:

    ```bash
    sudo rmmod <nombre_modulo>.ko
    ```

    Esto desinstalara el modulo del kernel de Linux.

   - **VER INFORMACION DE LOS MODULOS**
      - **CPU**

        Para ver la información del modulo de CPU se debe de ejecutar el siguiente comando:

        ```bash
        cat /proc/cpu_201901772
        ```

        Esto mostrara la información del modulo de CPU.

      - **RAM**

        Para ver la información del modulo de RAM se debe de ejecutar el siguiente comando:

        ```bash
        cat /proc/ram_201901772
        ```

## Agente de Monitoreo de Modulos Kernel

***Tecnologías Utilizadas:*** Lenguaje de Golang, Go v1.20.7, Docker v24.0.6

[`Agente de Monitoreo`](./Backend/golang)

Este es un programa escrito en Golang y contenerizado, que es instalado en cada una de las VMs a monitorear. Este permite la comunicación este la VM y la Plataforma de Monitoreo. Este cuenta con los siguientes componentes:

  - **Recolector**

    Se encarga de realizar llamadas los módulos de Kernel por medio de rutinas para obtener la información del estatus de CPU y RAM. Así mismo este envia la información a la API de NodeJS de la Plataforma de Monitoreo y este la almacene en una base de datos MySQL.

    Para lograr este recolector se hizo uso de rutina de go, las cuales son funciones que se ejecutan de manera concurrente con el programa principal. Estas rutinas se encargan de llamar a los modulos de kernel y obtener la información de CPU y RAM, para luego enviarla a la API de NodeJS.

    ```go
        go func() {
            tickerRAM := time.NewTicker(1 * time.Second)
            tickerCPU := time.NewTicker(1 * time.Second)
            tickerIP := time.NewTicker(1 * time.Second)
            tickerExtraInfo := time.NewTicker(1 * time.Second)
            defer tickerRAM.Stop()
            defer tickerCPU.Stop()
            defer tickerIP.Stop()
            defer tickerExtraInfo.Stop()
            for {
                select {
                case <-tickerRAM.C:
                    modules.GetRAMInfo()
                case <-tickerCPU.C:
                    modules.GetCPUInfo()
                case <-tickerIP.C:
                    giveMyInfo()
                case <-tickerExtraInfo.C:
                    modules.GetExtraInfo()
                }
            }
        }()
    ```

    Para poder enviar la información recolectada a la API de NodeJS se hizo uso de funciones asicronas las cuales se encargan de hacer peticiones POST a la API de NodeJS.

    ```go
    func giveMyInfo() {

        if firstTime {
            firstTime = false
            return
        }

        err2 := godotenv.Load()
        if err2 != nil {
            fmt.Println("Error loading .env file")
        }

        ipPlataform := os.Getenv("IP_PLATAFORM")
        url := "http://" + ipPlataform + "/setIP"

        temp := models.InfoModulesData{}
        temp.InfoRAM = modules.InfoRAM
        temp.InfoCPU = modules.InfoCPU
        temp.InfoCPU.CPUPercentage = modules.PercentCPU
        temp.InfoCPU.NameCPU = modules.NameCPU

        // Configura un cliente HTTP con timeout
        client := &http.Client{
            Timeout: time.Second * 1, // Aquí puedes ajustar el valor del timeout según tus necesidades
        }

        // Convierte temp a JSON
        jsonData, err := json.Marshal(temp)
        if err != nil {
            fmt.Println("Error al convertir a JSON:", err)
            return
        }

        // Realiza la solicitud POST con el cliente personalizado
        resp, err := client.Post(url, "application/json", bytes.NewBuffer(jsonData))
        if err != nil {
            fmt.Println("Error al hacer la petición:", err)
            return
        }
        defer resp.Body.Close()

        // Verifica si la solicitud fue exitosa
        if resp.StatusCode != http.StatusOK {
            fmt.Println("La solicitud POST no fue exitosa. Código de estado:", resp.StatusCode)
            return
        }

        fmt.Println("Solicitud POST exitosa")
    } 
    ```

  - **Service Killer**

    Expone un API para matar algún proceso por medio de su PID mediante llamadas a señales “KILL (-9)”. El API será llamada por el Frontend de la Plataforma de Monitoreo.
    
    | EndPoint | Método HTTP | Descripción |
    | ------ | :------: | ------ |
    | `/killProcess/:pid` | `DELETE` | Mata el proceso son el PID del proceso especificado  |

    ### Dockerización del Agente de Monitoreo

    Para la dockerización del agente de monitoreo se hizo uso de un Dockerfile el cual contiene los comandos necesarios para la creación de la imagen del agente de monitoreo.

    ```dockerfile
    # Etapa 1: Compilar la aplicación
    FROM golang:1.21.0-alpine3.18 AS build

    WORKDIR /app

    COPY ["go.mod", "go.sum", "./"]
    RUN go mod download

    COPY . .
    RUN go build -o myapp

    # Etapa 2: Crear la imagen final
    FROM alpine:3.18
    WORKDIR /app
    COPY --from=build /app/myapp .
    CMD ["./myapp"]

    # docker build -t daniel499/monitor_modulos:5.0.0 .
    ```

    Esta imagen se subio al repositorio de DockerHub: 
    - [`daniel499/monitor_modulos:5.0.0`](https://hub.docker.com/repository/docker/daniel499/monitor_modulos)


    ### Despliegue del Agente de Monitoreo de Modulos Kernel

    Para el desplieque del agente monitoreo se hizo uso del Docker Compose, el cual permite la ejecución de múltiples contenedores de Docker de manera simultanea. Para esto se creo un archivo llamado docker-compose.yml el cual contiene la configuración de los contenedores a ejecutar.

    ```yml
    version: "3.9"
    services:
    modulo:
        image: daniel499/monitor_modulos:5.0.0
        privileged: true
        pid: host
        container_name: agente
        restart: always
        ports:
        - "3000:3000"
        environment:
        - IP_PLATAFORM=35.211.62.154:4000
        volumes:
        - /:/host
    ```

## Plataforma de Monitoreo de Modulos Kernel

- ### API de Comunicación con el Agente de Monitoreo
  
  ***Tecnologías Utilizadas:*** Lenguaje de Programación JavaScript, NodeJS v20.5.0, npm v10.1.0

  [`API`](./Backend/nodejs)

  Esta API se encarga de recibir la información de los modulos de kernel por medio del agente de monitoreo y almacenarla en una base de datos MySQL. También expone un API para el Frontend de la Plataforma de Monitoreo para que este pueda obtener la información de los modulos de kernel.

    | EndPoint | Método HTTP | Descripción |
    | ------ | :------: | ------ |
    | `/setIP` | `POST` | Recibe la información de los modulos de kernel y la almacena en la base de datos, ademas tambien almacena la IP de la VM que envia la informacion |
    | `/getVMs` | `GET` | Devuelve la lista de IPs de las VMs que se encuentran monitoreando |
    | `/killProcess/:ip/:pid` | `DELETE` | Mata el proceso son el PID del proceso especificado en la VM especificada |
    | `/getIPsHistory` | `GET` | Devuelve la lista de IPs de las VMs que se encuentran monitoreando y la fecha de la ultima vez que se recibio informacion de la VM |
    | `/getHistory/:ip` | `GET` | Devuelve el historial de informacion de los modulos de kernel de la VM especificada |
    | `/delIP` | `GET` | Elimina la IP de la VM especificada de la base de datos |

    **Dockerización de la API**

    Para la dockerización de la API se hizo uso de un Dockerfile el cual contiene los comandos necesarios para la creación de la imagen de la API.

    ```dockerfile
    # Etapa 1: Compilar la aplicación
    FROM golang:1.21.0-alpine3.18 AS build

    WORKDIR /app

    COPY ["go.mod", "go.sum", "./"]
    RUN go mod download

    COPY . .
    RUN go build -o myapp

    # Etapa 2: Crear la imagen final
    FROM alpine:3.18
    WORKDIR /app
    COPY --from=build /app/myapp .
    CMD ["./myapp"]

    # docker build -t daniel499/monitor_modulos:5.0.0 .
    ```

    Esta imagen se subio al repositorio de DockerHub:
    - [`daniel499/monitor_api:1.0.0`](https://hub.docker.com/repository/docker/daniel499/monitor_api)

- ### Cliente de Monitoreo de Modulos Kernel

    ***Tecnologías Utilizadas:*** Lenguaje de Programación JavaScript, NodeJS v20.5.0, npm v10.1.0, React v18.2.0, React Router Dom v6.11.2, Vite v4.3.2

    [`Frontend`](./Frontend)

    Este es un cliente web que se encarga de mostrar la información de los modulos de kernel de las VMs que se encuentran monitoreando. Este cliente se comunica con la API de NodeJS para obtener la información de los modulos de kernel.



- ### Base de Datos

    [`Script`](./Scripts/Script.sql) de incialización de la base de datos.

    ```sql
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
    ```


## Despligue de la Plataforma de Monitoreo de Modulos Kernel y VMs en GCP

<div align="center"><img src="../../source/arquitecturaP1.png" width="800"/></div>








## API

Esta API fue realizada con el legunaje de programación JavaScript y el entorno de ejecución NodeJS v18.17.0. Por defecto se ejecuta en el puerto 4000

### EndPoints

| EndPoint | Método HTTP | Descripción |
| ------ | :------: | ------ |
| /consulta1 | `GET` | Devuelve el nombre de los candidatos a presidentes y vicepresidentes por partido  |
| /consulta2 | `GET` | Devuelve el número de candidatos a diputados |
| /consulta3 | `GET` | Devuelve el nombre de los candidatos a alcalde por partido  |
| /consulta4 | `GET` | Devuelve la cantidad de candidatos por partido (presidentes, vicepresidentes, diputados, alcaldes). |
| /consulta5 | `GET` | Devuelve la cantidad de votaciones por departamentos |
| /consulta6 | `GET` | Devuelve la cantidad de votos nulos |
| /consulta7 | `GET` | Devuelve el top 10 de edad de ciudadanos que realizaron su voto |
| /consulta8 | `GET` | Devuelve el top 10 de candidatos más votados para presidente y vicepresidente |
| /consulta9 | `GET` | Devuelve el top 5 de mesas más frecuentadas |
| /consulta10 | `GET` | Devuelve el top 5 la hora más concurrida en que los ciudadanos fueron a votar  |
| /consulta11 | `GET` | Devuelve la cantidad de votos por género |

**Ejemplo**
```JavaScript
http://${ip}:${port}/consulta1
```

<div align="center"><img src="../sources/ejemploEnpoint.png" width="800"/></div>

## Código Fuente

### Requerimientos

- **API**

    - NodeJS v18.17.0
    - Postman/Insomia o alguna otra aplicacion que permita hacer peticones HTTP

- **BASE DE DATOS**

    - MySQL v8.1.0
    - DataGrip/WorkBench/DBeaver

- **SOURCE**

  - [`API`](./Codigo_Fuente)
  - [`Script`](./Scripts)
  - [`Modelos`](./Modelos)