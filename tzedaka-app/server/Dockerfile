FROM python:3.8-slim

WORKDIR /tzedaka/tzedaka-app/server

# Copia el archivo requirements.txt y luego instala las dependencias
COPY requirements.txt .

RUN pip install -r requirements.txt

# Copia el resto de los archivos de la aplicación al contenedor
COPY . .

# Cambia la propiedad de los archivos y directorios al usuario no root
RUN chown -R nobody:nogroup /tzedaka/tzedaka-app/server

# Cambia al usuario no root
USER nobody

RUN chmod +x entrypoint.sh


# Define el comando para ejecutar la aplicación a través del script de inicio
CMD ["bash", "entrypoint.sh"]
