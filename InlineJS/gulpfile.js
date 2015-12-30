var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var fs = require('fs');

gulp.task('minify', function() {
	return gulp.src('bookmarklet.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'));
});

gulp.task('publish', ['minify'], function() {
	var priceCheckSource = fs.readFileSync('build/bookmarklet.js');
	
	return gulp.src('index.html')
		.pipe(htmlreplace({
			js: {
				src: priceCheckSource,
				tpl: "<a class='btn btn-success btn-lg' href='javascript:%s;void(0);' role='button'>&#x2714; Amazon Price Check</a>"
			}
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['minify', 'publish'], function() {
});