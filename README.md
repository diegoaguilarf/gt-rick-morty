Este proyecto representa una prueba tecnica para la empresa [Grut Studio](https://grutstudio.com).

[Demo]()

## Librerias externas que se usaron en este proyecto son:

> - axios: ^0.19.2
> - node-sass: ^4.14.1
> - rc-pagination: ^3.0.1
> - react-router-dom: ^5.2.0

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Anotaciones

- No vi la necesidad de usar un estado centralizado como Redux, ya que es supremamente sencillo el consumo del API y la comunicación entre componentes no estaba compleja.

- Filtrar los personajes por status & gender fue sencillo dado que se hardcodeo las opciones en el caso de species
& type fue más complejo, ya que no conocía sus posibles opciones y la API no exponía estos datos, así que se escogieron unas opciones a ojo entre la lista principal de personajes.

- En las posibles combinaciones de los filtros no se combina con la búsqueda por nombre.

- El diseño puede mejorar, procure respetar las pantallas dadas.

- Estuve en otros asuntos de trabajo y no me dio el tiempo para incluir animaciones y transiciones, en los días siguientes al deadline haré un, reléase con esto.


