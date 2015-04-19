var gulp = require('gulp'),
    less = require('gulp-less'),
    runSequence = require('run-sequence'),

    fileNameBase = 'weather',
    lessFileName = fileNameBase + '.less',

    cssFolder = 'css',
    customCssFolder = cssFolder + '/custom';


gulp.task('lessToCss', function() {
    var result = gulp.src(customCssFolder + '/' + lessFileName)
        .pipe(less());

    return result.pipe(gulp.dest(customCssFolder));
});

gulp.task('default', function(callback) {
    runSequence('lessToCss',
        callback);
});
