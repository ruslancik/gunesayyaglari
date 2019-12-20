const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');


//test 
gulp.task('default', function(){
    console.log('Gulp is runing...')
})

gulp.task('autoprefixer', function(){
    gulp.src('css/*.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('dist'));
})

gulp.task('cleanCSS', function(){
    gulp.src('dist/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
})

