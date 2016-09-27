'use strict';

import browser from 'browser-sync';
import clean from 'gulp-clean';
import filter from 'gulp-filter';
import gulp from 'gulp';
import path from 'path';
import rename from 'gulp-rename';
import serve from 'browser-sync';
import sync from 'run-sequence';
import template from 'gulp-template';
import webpack from 'webpack-stream';
import yargs from 'yargs';

const root = 'app';

const resolveToComponents = (glob = '') => {
  return path.join(root, '', glob); // app/{glob}
};

const resolveToIonicComponents = (glob = '') => {
  return path.join('app/assets', '', glob); // app/assets/{glob}
};

// map of all paths to compile
const paths = {
  entry: [],
  blankComponents: path.join(__dirname, 'generator', 'component/**/*.**'),
  app: ['./app/**/*.{js,css,html}', './app/css/**/*.css'],
  js: './app/**/*!(.spec.js).js',
  css: ['./app/**/*.css', './app/**/*.css'],
  toCopy: ['./static/*.{ttf,svg,eot}', './app/static/*.{ttf,svg,eot}'],
  html: ['index.html', './app/**/*.html'],
  json: 'db.json',
  heroku: ['heroku-web', 'Procfile', 'package.json'],
  dest: 'app/assets',
  output: ''
};

const cap = (val) => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
const name = yargs.argv.name;
const parentPath = yargs.argv.parent || '';
const route = !!yargs.argv.route;

const generateComponent = () => {
  const destPathComponent = path.join(resolveToComponents('components'), parentPath, name);
  gulp.src(paths.blankComponents)
    .pipe(template({
      name: name,
      upCaseName: cap(name),
      route
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPathComponent));
};

const generateIonicComponent = () => {
  const destPathComponent = path.join(resolveToComponents('app/components'), parentPath, name);
  gulp.src(paths.blankComponents)
    .pipe(template({
      name: name
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', name);
    }))
    .pipe(gulp.dest(destPathComponent));
};

// Generate components web and ionic templates
gulp.task('component', () => {
  generateComponent(); // Web components
  generateIonicComponent();  // Ionic components specific with same html name
});

// Copy all fonts and bundle.js files into static and fonts directories contained by /assets
gulp.task('copy', () => {
  gulp
  .src(paths.toCopy[0], { base: 'static' })
  .pipe(gulp.dest(paths.dest + '/fonts'));
});

gulp.task('copyDir', () => {
  gulp.src(['./app/**/*', './static/*',paths.heroku[0], paths.heroku[1], paths.heroku[2], paths.html[0], paths.json], {
      base: '.'
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
  gulp
  .src(paths.toCopy[0], { base: 'static' })
  .pipe(clean({force:true}));
});

gulp.task('clean:prod', () => {
  gulp
  .src(paths.toCopy[1], { base: 'dist' })
  .pipe(clean({force:true}));
});

// Build resources by calling webpack module in webpack.config.js
gulp.task('build', () => gulp.src(paths.entry)
  .pipe(webpack(require('./webpack.config')))
  .pipe(gulp.dest('static'))
);

// Start server for browser-sync
gulp.task('serve', () => {
  serve({
    port: process.env.PORT || 4500,
    open: false,
    server: { baseDir: paths.output }
  });
});

gulp.task('build:prod', () => gulp.src(paths.entry)
  .pipe(webpack(require('./webpack.prod.config')))
  .pipe(gulp.dest('static'))
);

gulp.task('serve:prod', () => {
  serve({
    port: process.env.PORT || 5000,
    open: false,
    server: { baseDir: 'dist' }
  });
});

// Watch scripts state by relaoding browser after updating
gulp.task('watch', () => {
  gulp.watch(paths.app, ['build', browser.reload]);
});

gulp.task('watch:prod', () => {
  gulp.watch(paths.app, ['build:prod', browser.reload]);
});

// Start all tasks (build, serve & watch)
gulp.task('default', (done) => {
  sync('clean', 'build', 'copy', 'serve', 'watch', done);
});

gulp.task('prod', (done) => {
  sync('clean:prod', 'build:prod', 'copyDir', 'serve:prod', 'watch:prod', done)
})
