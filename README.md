Este proyecto representa una prueba tecnica para la empresa [Grut Studio](https://grutstudio.com).

[Demo](https://dazzling-hopper-24e600.netlify.app/)

## Librerias externas que se usaron en este proyecto son:

> - axios: ^0.19.2
> - node-sass: ^4.14.1
> - rc-pagination: ^3.0.1
> - react-router-dom: ^5.2.0

### `npm run start`

Corre la aplicación en modo desarrollo<br />
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.<br />
Se agrupa correctamente en modo de producción y optimiza el build para el mejor rendimiento.

El build esta minificado y los nombres de los archivos incluidos en los hashes.<br />
Tu aplicación esta lista para hacer deployed!

## Anotaciones

- No vi la necesidad de usar un estado centralizado como Redux, ya que es supremamente sencillo el consumo del API y la comunicación entre componentes no estaba compleja.

- Filtrar los personajes por status & gender fue sencillo dado que se hardcodeo las opciones en el caso de species
& type fue más complejo, ya que no conocía sus posibles opciones y la API no exponía estos datos, así que se escogieron unas opciones a ojo entre la lista principal de personajes.

- En las posibles combinaciones de los filtros no se combina con la búsqueda por nombre.

- El diseño puede mejorar, procure respetar las pantallas dadas.

- Estuve en otros asuntos de trabajo y no me dio el tiempo para incluir animaciones y transiciones, en los días siguientes al deadline haré un release con esto.

## Nota
- Aun me quedan detalles por mejorar, espero me permitan un tiempo extra para terminarlo.
