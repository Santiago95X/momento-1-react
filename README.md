# Momento 1 - Proyecto de React con Vite

Bueno, para este primer entregable decidí armar la interfaz usando React. La idea principal era separar el diseño en pedacitos (componentes) para no terminar con un solo archivo gigante y enredado. 

## ¿Qué se usó?
* React (con Vite para que corriera rápido)
* CSS en línea para los estilos básicos

## Historias de Usuario
Para que el proyecto tenga sentido, definí estas historias:

*   **HU-01:** Como visitante, quiero ver una barra de navegación en la parte superior para poder identificar la marca y navegar por el sitio.
*   **HU-02:** Como visitante, quiero ver una lista de productos con su nombre y precio en la página principal para conocer la oferta de la marca.
*   **HU-03:** Como visitante, quiero ver un pie de página con información de derechos de autor para saber quién es el dueño del sitio.

## ¿Cómo está organizado?
Metí todo lo de los componentes en su propia carpeta para mantener el orden:
- `src/components/`: Aquí están Navbar, Footer y ProductCard.
- `src/views/`: Aquí dejé la vista principal (Home).

*Nota mental para mí: Al principio me enredé un poco con el useState para pasar los datos a las tarjetas, pero leyendo un poco logré que funcionara.*
