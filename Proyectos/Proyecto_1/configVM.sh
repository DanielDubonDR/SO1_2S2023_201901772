#!/bin/bash

sudo apt-get update
sudo apt-get install -y gcc-12  # Utiliza -y para evitar la confirmación
sudo apt-get install -y make  # Utiliza -y para evitar la confirmación

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

git clone "https://DanielDubonDR:TOKEN@github.com/DanielDubonDR/SO1_2S2023_201901772.git"

cd /SO1_2S2023_201901772/Proyectos/Proyecto_1/Modules/CPU
sudo make

cd /SO1_2S2023_201901772/Proyectos/Proyecto_1/Modules/RAM
sudo make

cd /SO1_2S2023_201901772/Proyectos/Proyecto_1/Modules
sudo ./install.sh

# git clone "https://USER_GITHUB:TOKEN@github.com/USER_GITHUB/NOMBRE_REPO.git"