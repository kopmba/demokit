# Brunch + Gulp + Webpack + Babel/ES6 + Angular Material + Ionic

Un projet utilisant un seul code Angular pour le web et mobile

## Installation

Cloner le repo manuellement ou le télécharger

## Demmarer

* Installer (S'ils n'existent pas encore):
    * [Node.js](http://nodejs.org): `brew install node` sur OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * [Webpack](https://webpack.github.io/): `npm install -g webpack`
    * [Gulp](http://gulpjs.com/): `npm install -g gulp`
    * [json-server](http://jsonplaceholder.typicode.com/): `npm install -g json-server`
    * Brunch, Gulp plugins and app dependencies: `npm install`
* Run:
    * `npm run api-server` — Définit une API Rest pour tester ou prototyper l'application.
    * `npm run launch:web` — Observe le projet web avec un redémarrage continue.
    * `npm run launch:mobile` — Construit le paquet su projet et l'observe avec un redémarrage continue. 
    * `gulp prod` — Génère le projet web en version minifié disponisble pour la mise en production.
    * `brunch build --production` — Génère le projet mobile en version minifié disponible pour la mise en production.
* Learn:
    * `www/` comme reperctoire publique est généré par brunch et démarrer par le serveur HTTP. Ecrire le code HTML dans le repertoire `app/components` pour ionic.
    * Placer les fichiers que vous souhaitez copier vers `www/` dans le repertoire `app/assets/`.
    * Le repertoire `static` est auto généré et contient le fichier bundle spécifique ES6 en tapant la commande `npm run launch:web`.

## ES7

To use proposed JS features not included into ES6, do this:

* `npm install --save-dev babel-preset-stage-0`
* in `brunch-config.js`, add the preset: `presets: ['es2015', 'stage-0']`

## Licence

MIT
