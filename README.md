# Proyecto Angular Movies - Sitio de Peliculas

![AngularMovie](./src/assets/screenshots/angular-movie-search.png)

Aplicacion web desarrollada en Angular que permite la busqueda y visualizacion de informacion detallada de diferentes peliculas utilizando la API de OMDb. La aplicacion ofrece una experiencia de usuario fluida y responsiva, ideal para los entusiastas del cine.

## Tabla de Contenidos

- [Características](#características)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Objetivos del Proyecto](#objetivos-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Instalación](#instalación)
- [API Utilizada](#api-utilizada)
- [Contribución](#contribución)

## Características

- **Búsqueda dinámica:** Encuentra películas de manera rápida ingresando el título en la barra de búsqueda.
- **Vista de detalles:** Visualiza información detallada de cada película, incluyendo sinopsis, director, elenco, año de lanzamiento, entre otros.
- **Navegación fluida:** Navega entre los resultados de búsqueda y detalles de manera intuitiva y eficiente.
- **Responsive design:** Diseño adaptable para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Capturas de Pantalla

A continuación, se presentan algunas capturas de pantalla que muestran diferentes vistas y funcionalidades de la aplicación:

### Página Principal

![Página Principal](./src/assets/screenshots/angular-movie.png)

### Resultados de Búsqueda

![Resultados de Búsqueda](./src/assets/screenshots/angular-movie-search.png)

### Detalles de la Película

![Detalles de la Película](./src/assets/screenshots/angular-movie-detail.png)

### Página de Favoritos - Vista en Modo Listado

![Listado de Favoritos](./src/assets/screenshots/movie-fav-list.png)

### Página de Favoritos - Vista en Modo Cuadricula

![Cuadricula de Favoritos](./src/assets/screenshots/movie-fav-grid.png)

## Tecnologías Utilizadas

- **Angular**: Framework utilizado para la construcción de la aplicación.
- **TypeScript**: Lenguaje de programación utilizado en el desarrollo de la lógica de la aplicación.
- **OMDb API**: API utilizada para obtener los datos de las películas.
- **HTML5**: Estructura y contenido de la aplicación.
- **CSS3**: Estilos y diseño de la interfaz de usuario.
- **Bootstrap**: Framework CSS para el diseño responsive.

## Objetivos del Proyecto

- Desarrollar una aplicación que permita a los usuarios buscar y explorar información sobre películas.
- Implementar buenas prácticas en el desarrollo de aplicaciones Angular.
- Aplicar conocimientos de Angular para construir una SPA (Single Page Application).
- Integrar la API de OMDb para consumir y mostrar datos dinámicamente.
- Crear una interfaz de usuario atractiva y fácil de usar.

## Funcionalidades

1. **Búsqueda de Películas:**

- Permite a los usuarios buscar películas por título.
- La búsqueda se activa al presionar Enter o al hacer clic en el botón de búsqueda.
- Se muestran resultados relevantes basados en el término de búsqueda.

2. **Vista de Detalles:**

- Al hacer clic en un resultado de búsqueda, se muestra una vista detallada de la película seleccionada.
- La vista incluye información como el título, la sinopsis, el año de lanzamiento, el director, el elenco, el género, la calificación, y un póster de la película.
- Además de la información de la pelicula seleccionada, se permite al usuario marcar la pelicula como favorita con el icono de estrella que se encuentra a un lado del titulo de la misma.

3. **Vista de Favoritos:**

- Se muestran todas las peliculas que el usuario marco como favoritas, permitiendo almacenar un máximo de 15 peliculas.
- Se incluye tambien la opción de modificar el tipo de visualización de dichas peliculas, alternando entre la vista de listado y vista de cuadricula.
- Además permite al usuario eliminar alguna de las peliculas de favoritos.

4. **Navegación Intuitiva:**

- Incluye un botón para regresar desde la vista de detalles a los resultados de búsqueda.
- Navegación rápida entre la página principal, resultados y detalles sin recargar la página.

5. **Carga Asíncrona:**

- Utiliza la carga asíncrona para obtener los datos de la API sin bloquear la interfaz de usuario.
- Proporciona una experiencia de usuario fluida y sin interrupciones.

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/lucas29951/angular-movies.git

2. **Navega al directorio del proyecto**
   ```bash
   cd angular-movie

3. **Instala las dependencias**
   ```bash
   npm install

4. **Ejecuta la aplicación**
   ```bash
   ng serve

5. **Abre tu navegador y ve a `http://localhost:4200` para ver la aplicación en funcionamiento.**

## API Utilizada

La aplicación utiliza la [OMDb API](https://www.omdbapi.com/) para obtener datos de películas, la cual requiere una API key para realizar las consultas.

### ¿Qué es la OMDb API?

La OMDb API (Open Movie Database API) es una interfaz de programación de aplicaciones que proporciona acceso a una extensa base de datos de información sobre películas, series de televisión y otros medios. Esta API permite a los desarrolladores obtener datos como títulos, sinopsis, elenco, directores, calificaciones, pósters y otros detalles relacionados con el mundo del entretenimiento.

### ¿Para qué sirve?

La OMDb API es ideal para aplicaciones que requieren información detallada sobre películas y series. Puedes usarla para:

- Construir aplicaciones de búsqueda de películas y series.
- Mostrar detalles de películas en sitios web o aplicaciones móviles.
- Crear listas de películas basadas en diferentes criterios como género, director o año de lanzamiento.
- Obtener datos para análisis o recomendaciones de contenido.

### ¿Cómo usar la OMDb API?

1. **Obtener una API Key:**
   Para utilizar la OMDb API, primero necesitas registrarte en [el sitio web de OMDb](http://www.omdbapi.com/apikey.aspx) y obtener una clave de API (API Key). Esta clave es necesaria para realizar solicitudes a la API.

2. **Realizar una solicitud:**
   Con la API Key, puedes realizar solicitudes HTTP a la API para obtener datos sobre películas o series. Una solicitud básica podría verse así:

   ```bash
   http://www.omdbapi.com/?t=Inception&apikey=tu_api_key
   ```

   En este ejemplo, la solicitud busca la película "Inception". El parámetro `t` indica el título de la película, y `apikey` es donde debes incluir tu clave de API.

3. **Procesar la respuesta:**
   La API devolverá un JSON con la información solicitada. Por ejemplo, una respuesta puede incluir datos como el título, año de lanzamiento, director, actores, y más.

   ```json
   {
     "Title": "Inception",
     "Year": "2010",
     "Rated": "PG-13",
     "Released": "16 Jul 2010",
     "Runtime": "148 min",
     "Genre": "Action, Adventure, Sci-Fi",
     "Director": "Christopher Nolan",
     "Writer": "Christopher Nolan",
     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
     "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
     ...
   }
   ```

4. **Integrar los datos en tu aplicación:**
   Los datos obtenidos de la OMDb API pueden ser utilizados en tu aplicación para mostrar información, generar listas, o cualquier otra funcionalidad relacionada con películas y series.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

- Realiza un fork del proyecto.
- Crea una rama para tu función o corrección (git checkout -b feature/nueva-caracteristica).
- Realiza tus cambios y haz commit de ellos (git commit -m 'Añadir nueva característica').
- Sube tus cambios (git push origin feature/nueva-caracteristica).
- Abre un `Pull Request`.

---

¡Gracias por visitar el repositorio de Angular Movies!