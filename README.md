# generator-reactapp

[![NPM version][npm-image]][npm-url] [![build status][travis-image]][travis-url] [![David deps][david-image]][david-url] [![node version][node-image]][node-url] [![Gittip][gittip-image]][gittip-url]

[![NPM](https://nodei.co/npm/generator-reactapp.png?downloads=true)](https://nodei.co/npm/generator-reactapp/)

--------------------------------------------------------------------------------

## What

`generator-reactapp` is a yeoman generator for react app.

Dependencies:

- [react](https://facebook.github.io/react/)

  - [react-router](https://github.com/reactjs/react-router)
  - [babel](http://babeljs.io/)
  - [react-css-modules](https://github.com/gajus/react-css-modules)

- [redux](http://redux.js.org/)

  - [redux-devtools](https://github.com/gaearon/redux-devtools)
  - [redux-logger](https://github.com/theaqua/redux-logger)
  - [redux-saga](https://github.com/yelouafi/redux-saga)
  - [react-router-redux](https://github.com/reactjs/react-router-redux)

- [babel-polyfill](https://babeljs.io/docs/usage/polyfill)

- [restful.js](https://github.com/marmelab/restful.js)

  - [fetch](https://github.com/github/fetch)
  - [request](https://github.com/request/request)

- [immutable](https://github.com/facebook/immutable-js)

- [normalizr](https://github.com/paularmstrong/normalizr)

- [reselect](https://github.com/reactjs/reselect)

- [store](https://github.com/marcuswestin/store.js)

- test

  - [mocha](https://mochajs.org/) (BDD)
  - [chai](http://chaijs.com/) (Assertion)
  - [sinon](sinonjs.org) (Mock)
  - [nock](https://github.com/node-nock/nock) (HTTP Mocking and Expectations)
  - [jsdom](https://github.com/tmpvar/jsdom) (A JavaScript implementation of the WHATWG DOM and HTML standards)
  - [enzyme](https://github.com/airbnb/enzyme)

- tools

  - [webpack](http://webpack.github.io/)

    - [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)(Hot-reload & Mock-API)

  - [gulp](http://gulpjs.com/)

  - [eslint](http://eslint.org/)

    - [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

  - [stylelint](http://stylelint.io/)

  - [editorconfig](http://editorconfig.org/)

  - [cross-env](https://github.com/kentcdodds/cross-env) (Sets an environment using unix style and have it work on windows too)

  - [postcss](https://github.com/postcss/postcss)

    - [autoprefixer](https://github.com/postcss/autoprefixer) (Add vendor prefixes to CSS rules)
    - [precss](https://github.com/jonathantneal/precss) (Use Sass-like markup in your CSS files)

--------------------------------------------------------------------------------

## Why

> Quickly start a project.

--------------------------------------------------------------------------------

## How

### Getting Started

To install Yeoman

```bash
npm install -g yo
```

To install generator-reactapp from npm, run:

```bash
npm install -g generator-reactapp
```

Finally, initiate the generator:

```bash
yo reactapp
```

### Starting the dev-server

```bash
npm start
```

### Running Tests

```bash
npm test
```

OR

```bash
npm run testing
```

### Building Project

Building for development

```bash
npm run dev
```

Building for production

```bash
npm run prod
```

### Project Structure

- .babelrc `babel config`
- .editorconfig `editor config`
- .eslintrc `eslint config`
- gulpfile.js `gulp tasks`
- server.js `dev-server`
- webpack.config.js `webpack config`
- src/

  - templates/index.html `html entry template`
  - api/ `mock api file`
  - assets/
  - actions/ `redux actions`
  - components/ `react components(reusability)`
  - constants/ `common constants`
  - containers/ `react containers(route)`
  - reducers/ `redux reducers`
  - sagas/ `redux sagas`
  - schemas/ `schemas and model for normalizr`
  - selectors/ `selectors for reselect`
  - services/ `services for api and logic`
  - store/ `redux store`
  - test/ `test scripts`
  - index.jsx `js entry`
  - libs.jsx `js vendor`
  - config.js `config`

- dist/ `generated by building`

## License

MIT

[david-image]: https://img.shields.io/david/Jackong/generator-reactapp.svg?style=flat-square
[david-url]: https://david-dm.org/Jackong/generator-reactapp
[gittip-image]: https://img.shields.io/gratipay/Jackong.svg
[gittip-url]: https://gratipay.com/~Jackong
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[npm-image]: https://img.shields.io/npm/v/generator-reactapp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-reactapp
[travis-image]: https://travis-ci.org/Jackong/generator-reactapp.svg?branch=master
[travis-url]: https://travis-ci.org/Jackong/generator-reactapp
