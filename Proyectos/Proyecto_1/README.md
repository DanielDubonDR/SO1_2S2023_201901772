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
    # Etapa de construcción
    FROM node:20-alpine3.17
    WORKDIR /app
    COPY package.json ./
    RUN npm install
    COPY . .
    CMD ["npm", "run", "dev"]

    # docker build -t daniel499/monitor_api:1.0.0 .
    ```

    Esta imagen se subio al repositorio de DockerHub:
    - [`daniel499/monitor_api:1.0.0`](https://hub.docker.com/repository/docker/daniel499/monitor_api)

- ### Cliente de Monitoreo de Modulos Kernel

    ***Tecnologías Utilizadas:*** Lenguaje de Programación JavaScript, NodeJS v20.5.0, npm v10.1.0, React v18.2.0, React Router Dom v6.11.2, Vite v4.3.2

    [`Frontend`](./Frontend)

    Este es un cliente web que se encarga de mostrar la información de los modulos de kernel de las VMs que se encuentran monitoreando. Este cliente se comunica con la API de NodeJS para obtener la información de los modulos de kernel.

    Para la creación de este cliente se hizo uso de React y React Router Dom para el manejo de las rutas de la aplicación. Para la comunicación con la API de NodeJS se hizo uso de la libreria Axios, para las graficas se utilizo react-chartjs-2 y para el diseño de la interfaz se utilizo Bootstrap v5.

    **VISTAS DEL CLIENTE**

    - *Monitoreo en tiempo real*

        Esta vista muestra la información de los modulos de kernel de las VMs que se encuentran monitoreando en tiempo real. Presenta dos graficas las cuales muestran el porcentaje de uso de la CPU y el porcentaje de uso de la RAM de la VM seleccionada. 

        <div align="center"><img src="../../source/monitor.png" width="800"/></div>

        Tambien muestra una tabla con los diferetes procesos que se estan ejecutando en la VM seleccionada y sus procesos hijos, cada uno de estos procesos muestra la siguiente información:

        - **PID** Identificador del Proceso
        - **Nombre** del Proceso
        - **Usuario** que ejecuto el Proceso
        - **Estado** en el que se encuentra el Proceso
        - **Memoria RAM** memoria ram consumida por cada proceso
        - **%RAM** que utiliza el proceso
        - **KILL service** para matar el proceso


        <div align="center"><img src="../../source/kill.png" width="800"/></div>

    - *Monitoreo a lo largo del tiempo*

        Permite elegir una VM y ver el porcentaje de uso de la CPU y el porcentaje de uso de la RAM de la VM seleccionada a lo largo del tiempo esto representado por medio de graficas.

        <div align="center"><img src="../../source/historial.png" width="800"/></div>


    **Dockerización del Frontend**

    Para la dockerización del frontend se hizo uso de un Dockerfile el cual contiene los comandos necesarios para la creación de la imagen del frontend.

    ```dockerfile
    # Etapa de construcción
    FROM node:20-alpine3.17
    WORKDIR /app
    COPY package.json ./
    RUN npm install
    COPY . .
    CMD ["npm", "start"]

    # docker build -t daniel499/monitor_client:2.0.0 .
    ```

    Esta imagen se subio al repositorio de DockerHub:
    - [`daniel499/monitor_client:2.0.0`](https://hub.docker.com/repository/docker/daniel499/monitor_client)


- ### Base de Datos

    [`Script`](./Scripts/Script.sql) de incialización de la base de datos.

    Almaena la información de los modulos de kernel de las VMs que se encuentran monitoreando.

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

- ### Arquitectura

<div align="center"><img src="../../source/arquitecturaP1.png" width="800"/></div>


- ### Monitoring Plataform
  
    ***Tecnologías Utilizadas:*** Google Cloud Platform, Ubuntu 22.04 LTS, Docker v24.0.6, Docker Compose v2.0.1, IP Estatica

    [`Plataforma de Monitoreo`](./Backend/nodejs)

    ***Configuración de la Instancia de GCP:***
    
    Para la plataforma de monitoreo se creo una instancia de GCP con las siguientes características:

    - *Nombre:* `cliente-monitor`
    - *Sistema Operativo:* `Ubuntu 22.04 LTS`
    - *Almacenamiento:* `10 GB`
    - *Ubicación*:
      - Region: `us-east1 (Carolina del Sur)`
      - Zonas: `us-east1-b`
    - *Tipo de Maquina:* `e2-medium (2 vCPU, 4 GB de memoria)`
    - *Disco de Arranque:* `Ubuntu 22.04 LTS`
    - *Firewall:* `Permitir HTTP, HTTPS, SSH`
    - *Tags de red:* `allin`, `allout`
    - *IP Estatica:*

    Se hizo uso de una IP estatica para que los agentes de monitoreo puedan comunicarse con la plataforma de monitoreo.

    Para la creacion de la IP estatica se fue a la seccion de VPC Network > External IP addresses y se creo una IP estatica con las siguientes caracteristicas:

    - *Nombre:* `ip-cliente-monitor`
    - *Tipo:* `Estatica`
    - *Asignado a:* `cliente-monitor`
    - *Redireccionamiento de puertos:* `Ninguno`
    - *Versión:* `IPv4`
    - *Tipo de direccion:* `Global`
    - *Region:* `us-east1`
    - *Tipo de acceso:* `Externo`
    - *Nivel de red:* `Estandar`

    ***Instalación de dependencias:***

    Para la instalación de las dependencias se hizo uso de los siguientes comandos:

    ```bash
    #!/bin/bash

    sudo apt-get update

    # Instalación de Docker
    # Agregar la clave GPG oficial de Docker:
    sudo apt-get install -y ca-certificates curl gnupg  # Utiliza -y para evitar la confirmación

    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Agregar el repositorio a las fuentes de Apt:
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin  # Utiliza -y para evitar la confirmación

    sudo groupadd docker
    sudo usermod -aG docker $USER

    # Descargo el repositorio de GitHub que contiene el docker-compose.yml
    git clone "https://DanielDubonDR:TOKEN@github.com/DanielDubonDR/configureVMs.git"
    ```

    Este script instala Docker y Docker Compose en la instancia de GCP y descarga el repositorio de GitHub que contiene el docker-compose.yml.

    ***Despliegue de la Plataforma de Monitoreo:***

    Dentro del directorio donde se descargo el repositorio navegar a la carpeta `configureVMs/configureMonitorClient` y ejecutar el siguiente comando:

    ```bash
    docker compose up -d
    ```
    
    Esto desplegara la plataforma de monitoreo en la instancia de GCP.

    El archivo de configuración de Docker Compose es el siguiente:

    ```yml
    version: "3.9"
    services:
    api:
        image: daniel499/monitor_api:1.0.0
        container_name: api_monitor
        restart: always
        environment:
        - DB_HOST=db
        - DB_USER=root
        - DB_PASSWORD=root
        - DATABASE=history
        - DB_PORT=3306
        - API_PORT=4000
        ports:
        - "4000:4000"
        depends_on:
        - db

    db:
        image: mysql
        container_name: db
        ports:
        - "3306:3306"
        environment:
        MYSQL_ROOT_PASSWORD: root
        MYSQL_DATABASE: history
        volumes:
        - mysql_db:/var/lib/mysql
        - ./db/db.sql:/docker-entrypoint-initdb.d/db.sql

    front:
        image: daniel499/monitor_client:2.0.0
        container_name: client
        environment:
        - VITE_API_URL=35.211.62.154:4000
        ports:
        - "80:5000"

    volumes:
    mysql_db:
    ```

    Donde se especifica que se debe de crear 3 contenedores, uno para la API, otro para la base de datos y otro para el cliente web. El contenedor de la API se comunica con el contenedor de la base de datos para almacenar la información de los modulos de kernel y el contenedor del cliente web se comunica con el contenedor de la API para obtener la información de los modulos de kernel.

    Para acceder a la plataforma de monitoreo se debe de ingresar a la IP estatica de la plataforma de monitoreo.

- ### VMs to Monitoring

    ***Tecnologías Utilizadas:*** Google Cloud Platform, Ubuntu 22.04 LTS, Docker v24.0.6, Docker Compose v2.0.1, Modulos Kernel, Autoscaling, template de VMs

    ***Template de VMs:***

    Se creo un template de VMs en la sección de *Plantillas de instancia* con las siguientes características:

    - *Nombre:* `monitor-modules-template`
    - *Sistema Operativo:* `Ubuntu 22.04 LTS`
    - *Almacenamiento:* `10 GB`
    - *Ubicación*:
      - Region: `us-east1 (Carolina del Sur)`
      - Zonas: `us-east1-b`
    - *Tipo de Maquina:* `e2-medium (2 vCPU, 4 GB de memoria)`
    - *Firewall:* `Permitir HTTP, HTTPS, SSH`
    - *Tags de red:* `allin`, `allout`
    - *startup-script:*

    ```bash
    #!/bin/bash

    # Instalo dependecias para poder comilar los modulos
    sudo apt-get update
    sudo apt-get install -y gcc-12
    sudo apt-get install -y make

    # Instalo depedencias para hacer pruebas de estress y el service killer
    sudo apt-get install -y stress
    sudo apt-get install -y python3-pip
    pip install flask
    pip install flask_cors

    # Instalación de Docker
    # Agregar la clave GPG oficial de Docker:
    sudo apt-get install -y ca-certificates curl gnupg  # Utiliza -y para evitar la confirmación

    sudo install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
    sudo chmod a+r /etc/apt/keyrings/docker.gpg

    # Agregar el repositorio a las fuentes de Apt:
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo $VERSION_CODENAME) stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
    sudo apt-get update

    sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

    sudo groupadd docker
    sudo usermod -aG docker $USER

    # Descargo el repositorio donde tengo las configuraciones
    git clone "https://DanielDubonDR:TOKEN@github.com/DanielDubonDR/configureVMs.git"

    # Compilo el modulo CPU
    cd /configureVMs/configureModulesMonitor/Modules/CPU
    sudo make

    # Compilo el modulo de RAM
    cd /configureVMs/configureModulesMonitor/Modules/RAM
    sudo make

    # Instalo los modulos
    cd /configureVMs/configureModulesMonitor/Modules
    sudo ./install.sh

    # Levanto el monitor de modulos a traves de docker compose
    cd /configureVMs/configureModulesMonitor
    sudo docker compose up -d

    ```

    Este script se encarga de instalar las dependencias necesarias para la compilación de los modulos de kernel, compilar los modulos de kernel, instalar los modulos de kernel, instalar las dependencias necesarias para las pruebas de estress y el service killer, descargar el repositorio de GitHub que contiene el docker-compose.yml y levantar el agente de monitoreo de modulos kernel.

    Cada vez que se crea una VM con este template se ejecuta el script de inicio de la VM.

    El docker-compose.yml que se encarga de levantar el agente de monitoreo de modulos kernel es el siguiente:

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

    ***Grupo de Instancias:***
    
    Se creo un grupo de instancias en la sección de *Grupos de instancias* con las siguientes características:

    - *Nombre:* `monitor-modules-group`
    - *Instance template:* `monitor-modules-template`
    - *Ubicación*:
      - Region: `us-east1 (Carolina del Sur)`
      - Zonas: `us-east1-b`, `us-east1-c`, `us-east1-d`
    - *Ajuste de escala automático:*
      - Modo de ajuste de escala automático: `Agrega y quita instancias del grupo`
      - Mínimo de instancias: `2`
      - Máximo de instancias: `4`
      - Autoscaling signals
        - Uso del CPU: `60%`

    Al crear este grupo de instancias se crean 2 instancias de manera automatica y se van agregando instancias de manera automatica cuando el uso del CPU de las instancias creadas es mayor al 60%.

    Estas instancias se comunican con la plataforma de monitoreo por medio de la IP estatica de la plataforma de monitoreo y le envian la información de los modulos de kernel.

    Ya que cada maquina que se crea con el template de VMs ejecuta el script de inicio de la VM, cada vez que se crea una instancia de manera automatica se ejecuta el script de inicio de la VM.