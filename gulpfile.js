var gulp =           require('gulp'),
    sass =           require('gulp-sass'),
    browserSync =    require('browser-sync');


gulp.task('sass', function () {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass())
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('app/css'))
})

gulp.task('browser-sync', function () {
    browserSync({
        server:{
            baseDir: 'app'
        },
        notyfi: false
    });
})
gulp.task('watch',['browser-sync','sass'],function () {
    gulp.watch('app/sass/**/*.scss',['sass'])
    gulp.watch('app/*.html', browserSync.reload)
    gulp.watch('app/js/**/*.js', browserSync.reload);
})
























