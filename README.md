# PokeApi Project
## Ejercicio de React - UseEffect - UseState

| Módulo: Desarrollo Web en Entorno Cliente DAW - IES HLanz |
| --------- |
| Profesor: Isaías FL |

Se pretende crear una web en React que permita buscar y mostrar (100 pokemons) información de
los pokemons usando la pokeapi.

Para ello la web debe disponer de al menos los siguientes componentes:

### Estructura del Ejercicio

*`src/components`*

- *Navbar*: Contiene el componente de la barra de navegación con el logo (SVG), botones "Home", "About", y "User".
- *Footer*: Contiene el componente del pie de página con el nombre del creador y sus redes sociales.
- *SearchBar*: Componente para el buscador. Permitirá buscar por pulsación de teclado la tarjeta del pokemon deseada filtrando los datos en tiempo real. La pulsación de la tecla ESC limpia el buscador y por tanto vuelve a mostrar todos los 100 pokemons
- *PokemonCard*: Representa cada tarjeta de Pokémon con la imagen, el nombre y la media aritmética de las stats que tenga. Al hacer click en esta tarjeta abrirá la ventana Modal con la info del pokemon.
- *PokemonModal*: Modal para mostrar más imágenes e información del Pokémon. La información a mostrar será decisión tuya.

*`src/pages`*

- *Home*: Contiene la lógica principal de la página de inicio con la búsqueda y la visualización de las cartas de Pokémon.
- *About*: Contiene la información detallada sobre ti, tus portfolios y enlaces a GitHub.

*`src/api`*

- *pokeApi.js*: Archivo que maneja la llamada a la API de PokeAPI. Puedes estructurar este archivo para exportar funciones específicas para obtener información sobre Pokémon.

*`src/assets`*

- *images*: Carpeta para almacenar imágenes, como el logo y cualquier imagen que necesites.

### Estructura 📄
```
src
├── components
│ ├── Navbar
│ ├── Footer
│ ├── SearchBar
│ ├── PokemonCard
│ └── PokemonModal
├── pages
│ ├── Home
│ └── About
├── api
│ └── pokeApi.js
└── assets
└── images
```

### Extras
Se programará en React para que cuando el ancho de la pantalla ser menor de 400px las opciones del nav se convertirán en un menú de hamburguesa con las opciones del menu.
