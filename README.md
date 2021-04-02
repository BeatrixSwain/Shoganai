# Shoganai
## 31.03.2021
Proyecto de Django + Vue CLI

 ### DJAGO: 
- Aplicación Shoganai con modelo historia, API generada y funcionado en la ruta indicada en shoganai.urls.py
- Ejemplo sencillo.

### VUE CLI:
- Inicio de proyecto.
- Componentes: Historias (Edit/list)
- Edición de APP.vue -> hay navbar y footer
- Librerías: axios(para las peticiones al backend) y Sweet Alert.
- Paquete python: django-cors-headers
- En settings de la aplicación madre, añadirlo en installed_apps y un nuevo middleware. Además, añadir el CORS_ORIGIN_ALLOW_ALL y el CORS_ORIGIN_WHITELIST
- El nombre de la página viene desde variables de entorno.

## Preparado para arrancarlo sólo desde el servidor de DJANGO

# Screenshots :camera:
### Home
![alt text](https://i.gyazo.com/9645f8b8597dbd42ec424e9a3406dd8e.png)
### List
![alt text](https://i.gyazo.com/7e393d8cbf02434b3756870f003a500a.png)
### Edit
![alt text](https://i.gyazo.com/3e364b7a987a5d0dae86ce85061ff07a.png)
