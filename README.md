# Guitar Chord Diagram Viewer

A guitar fretboard chord diagram viewer.
Built with React, Redux.

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

The entirety of the framework is committed to source control. This GitHub issue
recommends it: https://github.com/Semantic-Org/Semantic-UI/issues/3620

#### Semantic-UI docs

Read these to know more:

* [Getting Started](http://semantic-ui.com/introduction/getting-started.html)
* [Theming](http://semantic-ui.com/usage/theming.html)

## Starting, building

### Development

* Bundle application & serve it in-memory:
  * `npm start`
* Visit [http://localhost:8080/webpack/hot/dev-server](http://localhost:8080/webpack/hot/dev-server).

### Production

* Bundle application & output to `public/build`
  * `npm run build:prod`
* Start app:
  * `NODE_ENV=production npm start`

### Deployment

* Run the production build from the previous step.
* Upload files to AWS bucket.
  * Yes, kind of a pain. Since the app is hosted on Heroku, they only allow
    60 seconds between the git push and for the server to start, and the build
    takes over 2 minutes, I have to take these measures. So, it's easier to build
    these files locally, then have the Express server remotely load the app.
* `git push heroku`
