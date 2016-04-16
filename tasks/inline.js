import gulp from 'gulp';
import inline from 'gulp-inline-source';

	gulp.task('inline', () => {
		gulp.src('dist/index.html')
			.pipe(inline())
			.pipe(gulp.dest('dist'));
		});
