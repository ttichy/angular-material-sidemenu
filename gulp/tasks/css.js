import gulp from 'gulp';
import del from 'del';
import config from '../config';


gulp.task('css', () => {
  return gulp
    .src(config.joinPath(config.srcFolder, 'stylesheets', 'main.css'))
    .pipe(gulp.dest(config.destFolder))
});
