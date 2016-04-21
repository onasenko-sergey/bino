import gulp from 'gulp';
import inline from 'gulp-inline-source';
import replace from 'gulp-replace';
import runSequence from 'run-sequence';

gulp.task('inline', () => {
	runSequence(
		'replace',
		'inline:css'
	);
});

gulp.task('replace', () => {
	return gulp.src('dist/assets/styles/inline.min.css')
		.pipe(replace('..', 'assets'))
		.pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('inline:css', () => {
	return gulp.src('dist/index.html')
		.pipe(inline())
		.pipe(gulp.dest('dist'));
});
