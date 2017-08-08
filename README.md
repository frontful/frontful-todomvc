# <a href="https://github.com/frontful/frontful-todomvc"><img heigth="75" src="http://www.frontful.com/assets/packages/todomvc.png" alt="Frontful TodoMVC" /></a>

`frontful-todomvc` is isomorphic [React](https://facebook.github.io/react/), [Express](https://expressjs.com/) and [Frontful](https://github.com/frontful) implementation of [TodoMVC](http://todomvc.com/) application to showcase various Frontful infrastructure elements.

### Installation

```shell
# Install yarn package manager
npm install yarn -g

# Install `frontful-todomvc` dependencies using yarn to respect `yarn.lock`
yarn install
```

### Scripts

```shell
# Start application for development with isomorphic live reload, state persistence etc.
yarn start

# Start application production build
yarn start:build

# Run tests
yarn test

# Build application for production
yarn build

# Run build manually
PORT=8000 node ./build/server
```

By default items will be stored in process i.e memory. To enable storage to [MongoDB](https://www.mongodb.com/) database, start application by setting `DB` environment variable to MongoDB connection string e.g. `DB=mongodb://localhost:27017/todomvc`

### Elements

List of integrated Frontful infrastructure elements and its utilized features.

##### [`frontful-environment`](https://github.com/frontful/frontful-environment)
  - Language configuration [`babel-preset-frontful`](https://github.com/frontful/babel-preset-frontful)
  - Linter configuration [`eslint-config-frontful`](https://github.com/frontful/eslint-config-frontful)
  - Build and bundle configuration
  - Developer utilities e.g. livereload and error handling
  - Isomorphic asset handling
  - [Package development assist](https://github.com/frontful/frontful-common#package-development-assist)

##### [`frontful-config`](https://github.com/frontful/frontful-config)
  - Isomorphic application and environment configuration
  - Separation between server side and browser configuration

##### [`frontful-style`](https://github.com/frontful/frontful-style)
  - CSS-in-JS styling mechanic
  - Full CSS support
  - CSS Modules like class name isolation
  - Critical CSS, isomorphic CSS rendering
  - Autoprefixer
  - Dynamic and parameterizable stylesheet groups
  - Stylesheets will be loaded only for components that are rendered, when all instances of component are unmounted, stylesheet will be disposed

##### [`frontful-model`](https://github.com/frontful/frontful-model)
  - Separate models for state management
  - Serializer and deserializer
  - Model extendability
  - Observability, provided by [Mobx](https://mobx.js.org/)

##### [`frontful-dao`](https://github.com/frontful/frontful-dao)
  - Isomorphic data access object
  - Http requests
  - Request memoization
  - Extends `frontful-model`
    - Provides caching
    - Reactivity

##### [`frontful-resolver`](https://github.com/frontful/frontful-resolver)
  - Binding provider between `react` components and `frontful-model` models
  - Isomorphic data prefetch
  - Resolves all data requisites for instances of `react` component before its rendering

##### [`frontful-router`](https://github.com/frontful/frontful-router)
  - Isomorphic routing, integrates with `frontful-resolver`
  - Extends `frontful-model`

##### [`frontful-utils`](https://github.com/frontful/frontful-utils)
  - Helper utilities
