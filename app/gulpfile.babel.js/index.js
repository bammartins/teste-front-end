'use strict';

import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import nunjucksRender from 'gulp-nunjucks-render';
import imagemin from 'gulp-imagemin';
import path from 'path';
import del from 'del';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import useref from 'gulp-useref';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import debug from 'gulp-debug';
import wait from 'gulp-wait';

import CONFIG from './config';

const exclude = path.normalize('!**/{' + CONFIG.tasks.html.excludeFolders.join(',') + '}/**');

const paths = {
    html: {
        src: [path.join(CONFIG.root.src, CONFIG.tasks.html.src, '/**/*.html'), exclude],
        dest: path.join(CONFIG.root.dest, CONFIG.tasks.html.dest),
        allFiles: path.join(CONFIG.root.src, CONFIG.tasks.html.src, '/**/*.html')
    },
    styles: {
        src: path.join(CONFIG.root.src, CONFIG.tasks.styles.src, '/**/*.{' + CONFIG.tasks.styles.extensions + '}'),
        dest: path.join(CONFIG.root.dest, CONFIG.tasks.styles.dest)
    },
    img: {
        src: path.join(CONFIG.root.src, CONFIG.tasks.images.src, '/**'),
        dest: path.join(CONFIG.root.dest, CONFIG.tasks.images.dest)
    },
    scripts: {
        entryPoint: path.join(CONFIG.root.src, CONFIG.tasks.scripts.src, 'main.js'),
        src: path.join(CONFIG.root.src, CONFIG.tasks.scripts.src, '/**'),
        dest: path.join(CONFIG.root.dest, CONFIG.tasks.scripts.dest),
        allFiles: path.join(CONFIG.root.src, CONFIG.tasks.scripts.src, '/**/*.js')

    },
    fonts: {
        src: path.join(CONFIG.root.src, CONFIG.tasks.fonts.src, '/**/*'),
        dest: path.join(CONFIG.root.dest, CONFIG.tasks.fonts.dest)
    },
    build: path.join(CONFIG.root.dest, '**/*')
};

gulp.task('html', () => {
    return gulp.src(paths.html.src)
        .pipe(plumber())
        .pipe(nunjucksRender({ path: ['src/html'] }))
        .pipe(useref({ searchPath: './node_modules'}))
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest(paths.html.dest));
});

gulp.task('images', () => {
    return gulp.src(paths.img.src)
        .pipe(plumber())
        .pipe(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest(paths.img.dest));
});

gulp.task('sass', () => {
    return gulp.src(paths.styles.src)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest));
});

gulp.task('js', () => {
    return browserify(paths.scripts.entryPoint, { debug: true, extensions: ['es6'] })
        .transform('babelify', { presets: ['es2015'] })
        .bundle()
        .pipe(source('main.min.js'))
        .pipe(buffer())
        // .pipe(uglify())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scripts.dest));
});

gulp.task('clean', () => {
    return del(CONFIG.root.dest);
});

gulp.task('browser-sync', () => {
    let files = [
        paths.build
    ];
    browserSync.init(files, {
        server: {
            baseDir: CONFIG.root.dest
        },
    });
});

gulp.task('watch', () => {
    gulp.watch(paths.html.allFiles, { debounceDelay: 300 }, ['html']);
    gulp.watch(paths.styles.src, ['sass']);
    gulp.watch(paths.img.src, ['images']);
    gulp.watch(paths.scripts.allFiles, ['js']);
});

gulp.task('build', ['clean'], () => {
    gulp.start('html');
    gulp.start('sass');
    gulp.start('images');
    gulp.start('js');
});

gulp.task('default', ['html', 'sass', 'js', 'images', 'watch', 'browser-sync']);