# Brunch + Gulp + Webpack + Babel/ES6 + Angular Material + Ionic

This is a project using only one Angular code for web and ionic

## Installation

Clone this repo manually or download it

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Webpack](https://webpack.github.io/): `npm install -g webpack`
    * [Gulp](http://gulpjs.com/): `npm install -g gulp`
    * [json-server](http://jsonplaceholder.typicode.com/): `npm install -g json-server`
    * Brunch, Gulp plugins and app dependencies: `npm install`
* Run:
    * `npm run api-server` — Fake Online REST API for Testing and Prototyping
    * `npm run launch:web` — watches the web project with continuous rebuild
    * `npm run launch:mobile` — builds and watches the project with continuous rebuild.
    * `gulp prod` — builds minified web project for production
    * `brunch build --production` — builds minified mobile project for production
* Learn:
    * `www/` as public dir (ionic) is fully auto-generated by brunch and served by HTTP server.  Write your HTML code in `app/components` dir specific to ionic.
    * Place files you want to be copied from `app/assets/` to `www/`.
    * `static` dir is auto-generated and contains the ES6 bundle javascript file when typing `npm run launch:web`

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['es2015', 'stage-0']`

## Licence

MIT# demokit
