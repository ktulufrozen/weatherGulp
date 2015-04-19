var gulp = require('gulp'),
    less = require('gulp-less'),
    runSequence = require('run-sequence'),
    args = require('yargs').argv,
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    linker = require('gulp-linker'),
    uglify = require('gulp-uglify'),

    baseOutputFolder = 'build',

    fileNameBase = 'weather',
    lessFileName = fileNameBase + '.less',
    cssFileName = fileNameBase + '.css',
    cssMinifiedFileName = fileNameBase + '.min.css',

    cssFolder = 'css',
    customCssFolder = cssFolder + '/custom',
    cssOutputFolder = baseOutputFolder + '/css',

    scriptsOutputFolder = baseOutputFolder + '/js',

    scriptsSourceFolder = 'js/app',
    minifiedSourcesFileName = fileNameBase + '.min.js',

    isProduction = args.prod;

gulp.task('lessToCss', function() {
    gulp.src(customCssFolder + '/' + lessFileName)
        .pipe(less())
        .pipe(gulp.dest(customCssFolder));

    if (isProduction) {
        return gulp.src([cssFolder + '/**/*.css'])
            .pipe(concat(cssMinifiedFileName))
            .pipe(minifycss())
            .pipe(gulp.dest(cssOutputFolder));
    }
});

gulp.task('linkCss', function() {
    return gulp.src('./index.html')
        .pipe(linker({
            scripts: isProduction ? [cssOutputFolder + '/' + cssMinifiedFileName] : [cssFolder + '/*.css', customCssFolder + '/' + cssFileName],
            startTag: '<!--STYLES-->',
            endTag: '<!--STYLES END-->',
            fileTmpl: '<link rel="stylesheet" href="%s">',
            appRoot: ''
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('minifyAppScripts', function() {
    if (isProduction) {
        gulp.src([scriptsSourceFolder + '/**/*Module.js', scriptsSourceFolder + '/**/*.js'])
            .pipe(concat(minifiedSourcesFileName))
            .pipe(uglify())
            .pipe(gulp.dest(scriptsOutputFolder));
    }
});

gulp.task('default', function(callback) {
    runSequence('lessToCss',
        'linkCss',
        'minifyAppScripts',
        callback);
});