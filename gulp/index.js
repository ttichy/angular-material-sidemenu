import gulp from 'gulp';
import del from "del";
import config from "./config.js";
import eslint from "gulp-eslint";
import changed from "gulp-changed-in-place";
import watch from "gulp-watch";
import runSequence from "run-sequence";
import gulpWebpack from "webpack-stream";
import webpack from "webpack";

gulp.task('clean', () => {
  return del([config.destFolder]);
});

gulp.task('css', () => {
  return gulp
    .src(config.joinPath(config.srcFolder, 'stylesheets', 'main.css'))
    .pipe(gulp.dest(config.destFolder))
});

gulp.task("eslint", () => {
  return gulp
    .src(config.gulpScripts.concat(config.srcScripts))
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format());
});

gulp.task("eslint-all", () => {
  return gulp
    .src(config.gulpScripts.concat(config.srcScripts))
    .pipe(changed())
    .pipe(eslint({ fix: true }))
    .pipe(eslint.format());
});

let watchConfig = {
  verbose: true
};
gulp.task('webpack', () => {
  return gulp.src('./src/main.js')
    .pipe(gulpWebpack({
      output: {
        filename: config.mainScript
      },
      devtool: 'inline-source-map',
      plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.DedupePlugin()
      ],
      module: {
        loaders: [
          {
            loaders: ['ng-annotate', 'babel-loader']
          }
        ]
      }
    }, webpack, () => 'done'))
    .pipe(gulp.dest(config.destFolder));
});

gulp.task('default', gulp.series('clean', 'webpack', 'eslint-all', 'css', function (done){
  done();
}));


