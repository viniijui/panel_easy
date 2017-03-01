let gulp = require('gulp');

//gulp.task('default', function () {
//  return gulp.src('./bower_components/jquery/**/*') // Get source files with gulp.src
//    .pipe(gulp.dest('./public/assets/jquery')) // Outputs the file in the destination folder
//});

//gulp.task('default', function () {
//  return gulp.src('./bower_components/materialize/**/*') // Get source files with gulp.src
//    .pipe(gulp.dest('./public/assets/materialize')) // Outputs the file in the destination folder
//});


//gulp.task('default', function () {
//  return gulp.src('./bower_components/chart.js/**/*') // Get source files with gulp.src
//    .pipe(gulp.dest('./public/assets/chartjs')) // Outputs the file in the destination folder
//});


gulp.task('default', function () {
  return gulp.src('./resources/assets/datatables/**/*') // Get source files with gulp.src
    .pipe(gulp.dest('./public/assets/datatables')) // Outputs the file in the destination folder
});


module.exports=gulp;