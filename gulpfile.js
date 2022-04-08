var gulp = require('gulp');
var sass = require('gulp-sass');
var newer = require('gulp-newer');
var concat = require('gulp-concat');
var merge = require('merge-stream');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

var PATHS = {

    build: {
        site: 'Site/',
        nav:'site/includes/navigation/',
        css: 'Site/assets/css/',
        scripts: 'Site/js/',
        images: 'Site/images/',
        fonts: 'Site/fonts/'
    },
    source: {
        source: 'Src/',
        styles: 'Src/scss/',
        scripts: 'Src/js/',
        images: 'Src/images/',
        fonts: 'Src/fonts/',
        normalize: 'bower_components/normalize-scss',
        bower: 'bower_components/'
    }
};

gulp.task('style-main', function () {
    var sassStream,
        cssStream;

    sassStream = gulp.src(PATHS.source.styles + 'main.scss')
    .pipe(plumber())    
    .pipe(sass({
            outputStyle: 'expanded',
            includePaths: [PATHS.source.normalize]
        }).on('error', function(err){
            console.log(err.toString());
            this.emit('end');
        }));

    cssStream = gulp.src([]);

    return merge(sassStream, cssStream)
    
    .pipe(concat('madison.css'))
    .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 versions'],
        cascade: false
    }))    
    .pipe(gulp.dest(PATHS.build.css))
        .pipe(browserSync.stream());
});


gulp.task('images', function () {
    return gulp.src(PATHS.source.images + '**/*')
        .pipe(newer(PATHS.build.images))
        .pipe(gulp.dest(PATHS.build.images))
        .pipe(browserSync.stream());
});



gulp.task('build', ['style-main'], function () {
    console.log('Building...');
});

gulp.task('default', function () {
    gulp.watch(PATHS.source.styles + '**/*.scss', ['style-main']);
    gulp.watch(PATHS.build.site + '**').on('change', browserSync.reload);
    gulp.watch(PATHS.build.nav + '**').on('change', browserSync.reload);


    browserSync.init({
        proxy: "localhost/RFGDealerTrip2020/site/home.asp",
        
        logFileChanges: true,
        logConnections: true,
        browser: ["chrome"]
    });
});