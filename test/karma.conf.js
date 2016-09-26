module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai', 'jasmine'],

    // list of files/patterns to load in the browser
    // list of files / patterns to load in the browser
    files: [
        'www/js/main.js',
        'https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.3.4/jasmine.min.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'node_modules/angular-mocks/angular-scenario.js',
        'app/**/*.spec.js'
    ],

    // files to exclude
    exclude: [],

    plugins: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { '**/*.spec.js': ['babel'] },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};