module.exports = function(config){
    config.set({
        transports: ['xhr-polling'],
        basePath: '',
        files: [
            // simple patterns to load the needed testfiles
            'node_modules/angular/angular.min.js',
            'node_modules/angular-mocks/angular-mocks.js',

            'js/vendor/**/*.js',

            'build/js/**/*Module.js', // we have to load module definitions first
            'build/js/**/*.js',
            'build/js/app.js',

            'tests/**/*Module*.js',
            'tests/**/*.js'
        ],

        frameworks: ["jasmine"],

        // list of files to exclude
        exclude: [],

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit'
        reporters: ['progress'],

        storyReporter: {
            showSkipped: true,
            showSkippedSummary: true
        },

        preprocessors: {},

        junitReporter: {
            outputFile: 'test-results.xml',
            suite: ''
        },

        // web server port
        port: 9876,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: 'karma.LOG_INFO',

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 120000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    })
};
