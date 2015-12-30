var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var fs = require('fs');

gulp.task('minify', function() {
	return gulp.src('bookmarklet.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

var buildIndex = function(tier) {
    var url = '';
    
    switch(tier) {
        case 'local':
            url = 'http://localhost:8080/bookmarklet.js';
            break;
            
        case 'prod':
            url = 'http://example.com/bookmarklet.js';
            break;
            
        default:
            throw 'Unknown tier';
    }
    
    return gulp.src('index.html')
		.pipe(htmlreplace({
			js: {
				src: url,
				tpl: '<a class="btn btn-success btn-lg" href="javascript:javascript:(function(){var s = document.createElement(\'script\'); s.type = \'text/javascript\'; s.src = \'%s\'; document.body.insertBefore(s, document.body.firstChild);})()" role="button">&#x2714; Amazon Price Check</a>'
			}
		}))
		.pipe(gulp.dest('dist/'));
}

gulp.task('publish-local', ['minify'], function() {
	buildIndex('local');
});

gulp.task('publish-prod', ['minify'], function() {
	buildIndex('prod');
});

gulp.task('default', ['publish-local'], function() {
});