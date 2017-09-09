var gulp = require('gulp')
var sass = require('gulp-sass')
var nunjucks = require('nunjucks')
var gulpnunjucks = require('gulp-nunjucks')
var markdown = require('nunjucks-markdown')
var marked = require('marked')
var inline = require('gulp-inline')
var uglify = require('gulp-uglify')
var minifyCss = require('gulp-minify-css')


// gulp.task('img', function() {
// 	return gulp
// 			.src('paper/picture_lars.jpg')
// 		.pipe(gulp.dest('dist'))
// });

gulp.task('sass', function() {
	return gulp
		.src('paper/styles.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
	gulp.start('sass')
	gulp.watch('paper/*.*', ['sass']);
});