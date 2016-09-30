

// Required


var gulp = require('gulp');
var minify = require('gulp-babel-minify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-html-minifier');

//Scripts
gulp.task('scripts', function() {

    gulp.src('js/*.js')
        .pipe(minify())
        .pipe(gulp.dest('dist'));


    gulp.src('*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist'));


    gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))


});


// Default task

gulp.task('default', ['scripts']);
