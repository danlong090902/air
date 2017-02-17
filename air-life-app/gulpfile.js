// var gulp = require('gulp');
// var gutil = require('gulp-util');
// var bower = require('bower');
// var concat = require('gulp-concat');
// var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');
// var rename = require('gulp-rename');
// var sh = require('shelljs');
//
// var paths = {
//   sass: ['./scss/**/*.scss']
// };
//
// gulp.task('default', ['sass']);
//
// gulp.task('sass', function(done) {
//   gulp.src('./scss/ionic.app.scss')
//     .pipe(sass())
//     .on('error', sass.logError)
//     .pipe(gulp.dest('./www/css/'))
//     .pipe(minifyCss({
//       keepSpecialComments: 0
//     }))
//     .pipe(rename({ extname: '.min.css' }))
//     .pipe(gulp.dest('./www/css/'))
//     .on('end', done);
// });
//
// gulp.task('watch', ['sass'], function() {
//   gulp.watch(paths.sass, ['sass']);
// });
//
// gulp.task('install', ['git-check'], function() {
//   return bower.commands.install()
//     .on('log', function(data) {
//       gutil.log('bower', gutil.colors.cyan(data.id), data.message);
//     });
// });
//
// gulp.task('git-check', function(done) {
//   if (!sh.which('git')) {
//     console.log(
//       '  ' + gutil.colors.red('Git is not installed.'),
//       '\n  Git, the version control system, is required to download Ionic.',
//       '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
//       '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
//     );
//     process.exit(1);
//   }
//   done();
// });


var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
// var minifyCss = require('gulp-minify-css');
gulp.task('concat-controllers', function () {
  // 将你的默认的任务代码放在这
  gulp.src(["www/js/controllers/base.js", "www/js/controllers/*.js"])
    .pipe(concat("controllers.js"))
    .pipe(gulp.dest("www/js"))
});

gulp.task('concat-services', function () {
  // 将你的默认的任务代码放在这
  gulp.src(["www/js/services/base.js", "www/js/services/*.js"])
    .pipe(concat("services.js"))
    .pipe(gulp.dest("www/js"))
});
//sass改css
// var rename = require('gulp-rename');
gulp.task('sass', function(done) {
  gulp.src(['./scss/style.scss'])
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    // .pipe(minifyCss({
    //   keepSpecialComments: 0
    // }))

    // .pipe(rename({ extname: '.min.css' }))
    // .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});
gulp.task('watch', ['concat-controllers', 'concat-services','sass'], function () {
  console.log('----------------执行成功');
  gulp.watch(["www/js/controllers/*.js", "www/js/services/*.js","./scss/**/*.scss"], ['concat-controllers', 'concat-services','sass'])
    .on('change', function (event) {
      console.log(event.path + '-----------------改变')
    })
});
