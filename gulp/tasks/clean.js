import gulp from 'gulp';
import del from 'del';
import config from '../config';

module.exports = function () {
  gulp.task('clean', () => {
    return del([config.destFolder]);
  });
}
