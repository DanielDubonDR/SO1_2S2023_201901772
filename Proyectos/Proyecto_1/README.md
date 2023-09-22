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

- [`CPU`](./Modules/CPU/cpu_201901772.c)

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
        cpu_percentaje: 20,
        num_cores: 12,
        total_ram: 16137712,
        processes:[
            {
                pid: 1,
                name: "systemd",
                user: 0,
                state: "1 - Interruptible",
                ram_memory: 13568,
                ram_porcentaje: 0,
                childs:[
                    {
                        pid: 301,
                        name: "systemd-journal",
                        user: 0,
                        state: "1 - Interruptible",
                        pid_parent: 1,
                        ram_memory: 30848,
                        ram_porcentaje: 0
                    },
                    ... more childs
                ]
            },
            ... more processes
        ],
	    total_processes: 365
    }
    ```

- [`RAM`](./Modules/RAM/ram_201901772.c)

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

## Plataforma de Monitoreo de Modulos Kernel
### API de Comunicación con el Agente de Monitoreo

### Cliente de Monitoreo de Modulos Kernel

## Despligue de la Plataforma de Monitoreo de Modulos Kernel en GCP

<div align="center"><img src="../Proyecto1_201901772/Modelos/IMAGEN/Modelo%20Conceptual.png" width="800"/></div>

El modelo conceptual se utilizó para definir las entidades y relaciones clave en el sistema, proporcionando una vista de alto nivel de la estructura de datos requerida. Esto ayudó a comprender la estructura general de los datos y las relaciones entre ellos, sin preocuparse por detalles técnicos.

**Entidades Potenciales**
- CUIDADANO
- VOTO
- MESA
- CARGO
- CANDIDATO
- DEPARTAMENTO
- PARTIDO



- **CIUDADANO - VOTO**
  
  - *De izquierda a derecha:* Cada ciudadano puede estar asociado con un o muchos votos

  - *De dercha a izquierda:* Cada voto debe estar asociado con un y solamente un ciudadano.
    




| Atributo | Tipo de Dato | Descripción |
| ------ | ------ | ------ |
| dpi | VARCHAR(13) | `LLAVE PRIMARIA` Identificador único del ciudadano |
| nombre | VARCHAR(30) | Nombre del ciudadano |
| apellido | VARCHAR(30) | Apellido del ciudadano |
| direccion | VARCHAR(100) | Dirección del ciudadano |
| telefono | VARCHAR(10) | Teléfono del ciudadano |
| edad | INTEGER | Edad del ciudadano |
| genero | VARCHAR(1) | Género del ciudadano |




### 📜 Scripts


Aquí se ubican los diversos scripts utilizados para ejecutar procesos relacionados con la creación, inserción, manipulación y consulta de datos en la base de datos.

- [`Crear Modelo`](./Scripts/modelo_elecciones.sql)

    Contiene los scripts necesarios para la creación del modelo de la base de datos

- [`Tablas Temporales`](./Scripts/tablas_temporales.sql)

    Contiene los scripts que permiten crear las tablas temporales donde se cargaran temporalmente los datos de las votaciones

- [`Cargar Modelo`](./Scripts/cargar_modelo_elecciones.sql)

    Contiene los scripts que permiten realizar la carga masiva de las tablas temporales al modelo de la base de datos

- [`Consultas`](./Scripts/consultas_modelo_elecciones.sql)

    Contiene las diferentes consultas que se utlizaran en cada EndPoint

- [`Eliminar Modelo`](./Scripts/eliminar_modelo_elecciones.sql)

    Contiene los scripts que permite la eliminacion de modelo de la base de datos junto a sus datos

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