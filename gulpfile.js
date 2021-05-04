import gulp from 'gulp';
import themeKit from '@shopify/themekit';
import sass from 'gulp-sass';

gulp.task('sass', () =>
  gulp.src('styles/custom-styles.scss').pipe(sass()).pipe(gulp.dest('assets'))
);

gulp.task('watch', () => {
  gulp.watch('styles/**/*.scss', gulp.series('sass'));
  themeKit.command('watch', {
    env: 'development',
  });
});
