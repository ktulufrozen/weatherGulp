var gulp = require('gulp'),
    less = require('gulp-less'),
    runSequence = require('run-sequence'),
    args = require('yargs').argv,
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),

    baseOutputFolder = 'build',

    fileNameBase = 'weather',
    lessFileName = fileNameBase + '.less',
    cssMinifiedFileName = fileNameBase + '.min.css',

    cssFolder = 'css',
    customCssFolder = cssFolder + '/custom',
    cssOutputFolder = baseOutputFolder + '/css',

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

gulp.task('default', function(callback) {
    runSequence('lessToCss',
        callback);
});