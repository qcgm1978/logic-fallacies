var gulp = require('gulp');
var Server = require('karma').Server;

// Run test once and exit
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', function () {
  var tsResult = tsProject.src().pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('built'));
});
gulp.task('default', ['build', 'scripts', 'test']);