# generator-reactapp

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]
[![Gittip][gittip-image]][gittip-url]

[npm-image]: https://img.shields.io/npm/v/generator-reactapp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/generator-reactapp
[travis-image]: https://travis-ci.org/Jackong/generator-reactapp.svg?branch=master
[travis-url]: https://travis-ci.org/Jackong/generator-reactapp
[david-image]: https://img.shields.io/david/Jackong/generator-reactapp.svg?style=flat-square
[david-url]: https://david-dm.org/Jackong/generator-reactapp
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[gittip-image]: https://img.shields.io/gratipay/Jackong.svg
[gittip-url]: https://gratipay.com/~Jackong

---

## What
`generator-reactapp` is a yeoman generator for react app.

Dependencies:
* [react](https://facebook.github.io/react/)
  * [react-router](https://github.com/reactjs/react-router)
  * [babel](http://babeljs.io/)
* [webpack](http://webpack.github.io/)
  * [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html)(Hot-reload & Mock-api)
  * [webpack-md5-hash](https://github.com/erm0l0v/webpack-md5-hash)(Revision)
* [gulp](http://gulpjs.com/)
* [redux](http://redux.js.org/)
  * [redux-devtools](https://github.com/gaearon/redux-devtools)
  * [redux-logger](https://github.com/theaqua/redux-logger)
  * [redux-thunk](https://github.com/gaearon/redux-thunk)
  * [redux-actions](https://github.com/acdlite/redux-actions)
  * [react-router-redux](https://github.com/reactjs/react-router-redux)
* [radium](http://stack.formidable.com/radium/) ([CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js))
* [bluebird](http://bluebirdjs.com/docs/getting-started.html) (Promise)
* [restful.js](https://github.com/marmelab/restful.js) (RESTful)
  * [fetch](https://github.com/github/fetch)
  * [request](https://github.com/request/request)
* test
  * [mocha](https://mochajs.org/) (BDD)
  * [chai](http://chaijs.com/) (Assertion)
  * [sinon](sinonjs.org) (Mock)
  * [nock](https://github.com/node-nock/nock) (HTTP Mocking and Expectations)
  * [jsdom](https://github.com/tmpvar/jsdom) (A JavaScript implementation of the WHATWG DOM and HTML standards)
* [eslint](http://eslint.org/)
* [editorconfig](http://editorconfig.org/)

---

## Why

* Quickly setup one project.
* All here.

---

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

* .babelrc `babel config`
* .editorconfig `editor config`
* .eslintrc `eslint config`
* gulpfile.js `gulp tasks`
* server.js `dev-server`
* webpack.config.js `webpack config`
* public/
  * actions/ `redux actions`
  * api/ `RESTful API`
  * components/ `react components(reusability)`
  * containers/ `react containers(route)`
  * reducers/ `redux reducers`
  * store/ `redux store`
  * test/ `test scripts`
  * index.jsx `js entry`
  * templates/index.html `html entry template`
  * build/ `generated by building`

## License

MIT
