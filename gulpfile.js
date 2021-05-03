const gulp = require('gulp')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')
const plumber = require('gulp-plumber')
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const liquid = require('@tuanpham-dev/gulp-liquidjs')
const glob = require("glob")
const Q = require('q')
const fs = require('fs')
const del = require('del')


const build = {
  buildHTML: ((filePath, projectName) => {
    if (!fs.existsSync(filePath + '/views/pages')) {
      return false;
    }

    return gulp.src(filePath + '/views/pages/*.liquid')
      .pipe(liquid({
        engine: {
          root: [filePath + '/views', filePath + '/views/components']
        }
      }))
      .pipe(gulp.dest('./dist/' + projectName))
      .on('end', reload);
  }),
  buildCSS: ((filePath, projectName) => {
    if (!fs.existsSync(filePath + '/scss/main.scss')) {
      return false;
    }

    return gulp.src(filePath + '/scss/main.scss')
      .pipe(plumber([{
        errorHandler: false
      }]))
      .pipe(sass())
      .pipe(prefix())
      .pipe(gulp.dest('./dist/' + projectName + 'css'))
  }),
  buildJS: ((filePath, projectName) => {
    if (!fs.existsSync(filePath + '/js')) {
      return false;
    }

    return gulp.src(filePath + '/js/**/*.js')
      .pipe(gulp.dest('./dist/' + projectName + 'js'))
  }),
  buildImg: ((filePath, projectName) => {
    if (!fs.existsSync(filePath + '/img')) {
      return false;
    }

    return gulp.src(filePath + '/img/**/*')
      .pipe(gulp.dest('./dist/' + projectName + 'img'))
  })
}

gulp.task('clean', () => {
  return del(['dist'], {
    force: true
  });
})

gulp.task('build:projects', (done) => {
  const promises = [];
  glob.sync('./src/projects/*').forEach(function (filePath) {
    const projectName = filePath.replace('./src/', '') + '/';

    ['buildHTML', 'buildCSS', 'buildJS', 'buildImg'].forEach((func) => {
      let pipe = build[func](filePath, projectName)
      if (pipe) {
        let defer = Q.defer();
        pipe.on('end', function () {
          defer.resolve();
        });
        promises.push(defer.promise);
      }
    })

  });
  return Q.all(promises);
})


gulp.task('build:home', (done) => {
  const promises = [];
  const filePath = './src/home'
  const projectName = '';

  ['buildHTML', 'buildCSS', 'buildJS', 'buildImg'].forEach((func) => {
    let pipe = build[func](filePath, projectName)
    if (pipe) {
      let defer = Q.defer();
      pipe.on('end', function () {
        defer.resolve();
      });
      promises.push(defer.promise);
    }
  })

  return Q.all(promises);
})

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false,
    server: {
      baseDir: './dist/'
    }
  })
  gulp.watch('./src/**/views/**/*.liquid', gulp.series('build'))
  gulp.watch('./src/**/scss/**/*.scss', gulp.series('build'))
  gulp.watch('./src/**/js/**/*.js', gulp.series('build'))
  gulp.watch('./src/**/img/**/*', gulp.series('build'))
  gulp.watch('./src/**/scss/*.scss').on('change', reload);
  gulp.watch('./src/**/js/**/*.js').on('change', reload)
})

gulp.task('dist-html', () => {
  return gulp.src('./dist/**/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('dist-css', () => {
  return gulp.src('./dist/**/css/*.css')
    .pipe(cleanCSS({
      level: {
        1: {
          specialComments: false
        },
        2: {
          all: true
        }
      }
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('dist-js', () => {
  return gulp.src('./dist/**/js/**/*.js')
    .pipe(minify({
      ext: {
        min: '.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest('dist'));
})

gulp.task('dist-img', () => {
  return gulp.src('./dist/**/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist'));
})

gulp.task('build', gulp.series('clean', gulp.parallel('build:home', 'build:projects')))

gulp.task('dist', gulp.series('build', gulp.parallel('dist-html', 'dist-css', 'dist-js', 'dist-img')));

gulp.task('default', gulp.series('build', 'browser-sync'))