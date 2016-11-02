# noteviewer

A guitar fretboard diagram viewer. Built with React, Redux. Musical
elements based on the functional music theory library,
[tonal](https://github.com/danigb/tonal).

[Demo](https://noteviewer.herokuapp.com/)

## Installations

### Application dependencies

`npm install`

### Style & theming framework

This app is using the [Semantic-UI](http://semantic-ui.com/) framework for
consistent styling.

* Globally install [gulp](https://github.com/gulpjs/gulp) build tool
  * `npm install -g gulp`
* Build the source:
  * `npm run build:styles`

Component definitions & preset themes are committed to source control.
This GitHub [issue](https://github.com/Semantic-Org/Semantic-UI/issues/3620)
recommends it.

#### Semantic-UI docs

Read these to know more:

* [Getting Started](http://semantic-ui.com/introduction/getting-started.html)
* [Theming](http://semantic-ui.com/usage/theming.html)

### Run tests

`npm test`

## Starting, building

### Development

* Bundle application & serve it in-memory:
  * `npm start`
* Visit [http://localhost:8080/webpack/hot/dev-server](http://localhost:8080/webpack/hot/dev-server).

### Production

To locally test a production build:

* Remove all build files
  * `npm run clean`
* Install production dependencies
  * `npm install --production`
* Build style framework, bundle application & output to `public/build`
  * `npm run heroku-postbuild`
* Start app:
  * `NODE_ENV=production npm start`
