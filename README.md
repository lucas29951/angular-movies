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
- [Uso](#uso)
- [API Utilizada](#api-utilizada)
- [Contribución](#contribución)
- [Licencia](#licencia)

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