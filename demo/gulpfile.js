const gulp = require('gulp');
const gulpAtomizer = require('gulp-atomizer');
const browserSync = require('browser-sync').create();

gulp.task('bs', ['acss'], () => {
    browserSync.init({
        server: {
            baseDir: "./",
            directory: true
        }
    });

    gulp.watch(["*.html"], ['acss', 'html-watch']);
});

gulp.task('html-watch', done => {
    browserSync.reload();
    done();
});

gulp.task('acss', () => {
    return gulp.src('*.html')
        .pipe(gulpAtomizer({
            outfile: 'atomic.css',
            acssConfig: Object.assign({}, require('../config')),
            addRules: require('../rules')
        }))
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['bs']);