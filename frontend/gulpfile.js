const argv = require('minimist')(process.argv.slice(2));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const changed = require('gulp-changed');
const concat = require('gulp-concat');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const jshint = require('gulp-jshint');
const lazypipe = require('lazypipe');
const merge = require('merge-stream');
const cssNano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
const rev = require('gulp-rev');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const combineMedia = require('gulp-combine-media');
const uglify = require('gulp-uglify-es').default;
const postcss = require('gulp-postcss');
const purgecss = require('@fullhuman/postcss-purgecss');
const purgecssWhiteList = require('@wenprise/purgecss-with-wordpress');
const babel = require('gulp-babel');

/**
 * 资源说明文件路径
 */
const manifest = require('asset-builder')('./assets/manifest.json');

/**
 * 资源说明文件里面定义的路径
 */
const path = manifest.paths;

/**
 * 资源说明文件配置， 在这里设置自定义选项
 */
const config = manifest.config || {};

/**
 * 全局资源
 */
const globs = manifest.globs;

/**
 * 全局资源
 */
const project = manifest.getProjectGlobs();

/**
 * 编译时的选项
 */
const enabled = {
    rev          : argv.production,
    maps         : argv.production,
    clean        : argv.clean,
    failStyleTask: argv.production,
    failJSHint   : argv.production,
    stripJSDebug : argv.production,
    stripJSDebug : argv.production,
};

/**
 * dist 目录中的版本说明文件
 */
const revManifest = path.dist + 'assets.json';

/**
 * 清理未使用的 CSS
 */
const cssPurge = () => {
    return postcss([
        purgecss({
            content          : [
                '/Users/Amoslee/Downloads/us.sitesucker.mac.sitesucker/cnw.ams/**/*.html',
                'placeholder.html',
            ],
            whitelist        : purgecssWhiteList.whitelist.concat([
                'ln-letters',
                'letterCountShow',
            ]),
            whitelistPatterns: purgecssWhiteList.whitelistPatterns.concat([
                /ln-*/,
                /listNav*/,
            ]),
            extractors       : [
                {
                    extractor : class TailwindExtractor {
                        static extract(content) {
                            return content.match(/[A-z0-9-:\/]+/g) || [];
                        }
                    },
                    extensions: ['css', 'html'],
                },
            ],
        }),
    ]);
};

/**
 * CSS 处理管道
 */
const cssTasks = (filename) => {
    const tailwindcss = require('tailwindcss');

    return lazypipe().pipe(() => {
        return gulpif(!enabled.failStyleTask, plumber());
    }).pipe(() => {
        return gulpif(enabled.maps, sourcemaps.init());
    }).pipe(() => {
        return gulpif('*.scss', sass({
            outputStyle    : 'nested', // libsass doesn't support expanded yet
            precision      : 10,
            includePaths   : ['.'],
            errLogToConsole: !enabled.failStyleTask,
        }));
    }).pipe(() => {
        return postcss([
            tailwindcss('./tailwind.conf.js'),
            require('autoprefixer'),
        ]);
    }).pipe(concat, filename).pipe(autoprefixer).pipe(() => {
        return gulpif(enabled.rev, cssPurge());
    }).pipe(() => {
        return gulpif(enabled.clean, cssPurge());
    }).pipe(() => {
        return gulpif(enabled.rev, cssNano({safe: true}));
    }).pipe(() => {
        return gulpif(enabled.rev, rev());
    }).pipe(() => {
        return gulpif(enabled.maps, sourcemaps.write('.', {
            sourceRoot: 'assets/styles/',
        }));
    })();
};

/**
 * JS 处理管道
 */
const jsTasks = (filename) => {
    return lazypipe().pipe(() => {
        return gulpif(enabled.maps, sourcemaps.init());
    }).pipe(concat, filename).pipe(uglify, {
        compress: {
            'drop_debugger': enabled.stripJSDebug,
        },
    }).pipe(() => {
        return gulpif(enabled.rev, rev());
    }).pipe(() => {
        return gulpif(enabled.maps, sourcemaps.write('.', {
            sourceRoot: 'assets/scripts/',
        }));
    })();
};

/**
 * 写入到版本说明
 */
const writeToManifest = (directory) => {
    return lazypipe().
        pipe(gulp.dest, path.dist + directory).
        pipe(browserSync.stream, {match: '**/*.{js,css}'}).
        pipe(rev.manifest, revManifest, {
            base : path.dist,
            merge: true,
        }).
        pipe(gulp.dest, path.dist)();
};

/**
 * 自动注入 Less 和 Sass bower 依赖
 */
gulp.task('wiredep', gulp.series(async () => {
    const wiredep = require('wiredep').stream;
    return gulp.src(project.css).
                pipe(wiredep()).
                pipe(changed(path.source + 'styles')).
                pipe(gulp.dest(path.source + 'styles'));
}));

/**
 * 编译、合并、优化 Bower CSS 和项目 CSS
 */
gulp.task('styles', gulp.series('wiredep', async () => {
    const merged = merge();
    manifest.forEachDependency('css', (dep) => {
        const cssTasksInstance = cssTasks(dep.name);
        if (!enabled.failStyleTask) {
            cssTasksInstance.on('error', (err) => {
                console.error(err.message);
                this.emit('end');
            });
        }
        merged.add(
            gulp.src(dep.globs, {base: 'styles'}).pipe(cssTasksInstance));
    });
    return merged.pipe(writeToManifest('styles'));
}));

/**
 * 运行 JSHint 然后编译、合并、优化 Bower JS 和项目 JS
 */
//gulp.task('scripts', ['jshint'], () => {
gulp.task('scripts', gulp.series(async () => {
    const merged = merge();
    manifest.forEachDependency('js', (dep) => {
        merged.add(
            gulp.src(dep.globs, {base: 'scripts'}).pipe(jsTasks(dep.name)));
    });
    return merged.pipe(writeToManifest('scripts'));
}));

/**
 * 收集所有的字体并输出到 fonts 文件夹
 */
gulp.task('fonts', gulp.series(async () => {
    return gulp.src(globs.fonts).
                pipe(flatten()).
                pipe(gulp.dest(path.dist + 'fonts')).
                pipe(browserSync.stream());
}));

/**
 * 无损压缩图像
 */
gulp.task('images', gulp.series(async () => {
    return gulp.src(globs.images).pipe(imagemin({
        progressive: true,
        interlaced : true,
        svgoPlugins: [
            {removeUnknownsAndDefaults: false},
            {cleanupIDs: false}],
    })).pipe(gulp.dest(path.dist + 'images')).pipe(browserSync.stream());
}));

/**
 * JSHint 任务
 */
gulp.task('jshint', gulp.series(async () => {
    return gulp.src([
        'bower.json',
        'gulpfile.js'].concat(project.js)).
                pipe(jshint()).
                pipe(jshint.reporter('jshint-stylish')).
                pipe(gulpif(enabled.failJSHint, jshint.reporter('fail')));
}));

/**
 * 清理编译文件夹
 */
gulp.task('clean', gulp.series(async () => {
    require('del').bind(null, [path.dist]);
}));

/**
 * 监控前端资源改变， 使用 BrowserSync 自动同步
 */
gulp.task('watch', gulp.parallel(() => {
    browserSync.init({
        files         : [
            '{lib,templates}/**/*.php',
            '*.php',
        ],
        proxy         : config.devUrl,
        snippetOptions: {
            whitelist: ['/wp-admin/admin-ajax.php'],
            blacklist: ['/wp-admin/**'],
        },
    });
    gulp.watch([path.source + 'styles/**/*'], gulp.series('styles'));
    gulp.watch([path.source + 'scripts/**/*'],
        gulp.series('jshint', 'scripts'));
    gulp.watch([path.source + 'fonts/**/*'], gulp.series('fonts'));
    gulp.watch([path.source + 'images/**/*'], gulp.series('images'));
    gulp.watch(['bower.json', 'assets/manifest.json'], gulp.series('build'));
}));

/**
 * 编译所有资源
 */
gulp.task('build', gulp.parallel('styles', 'scripts', 'fonts', 'images',
    gulp.series((callback) => {
        callback();
    })));

/**
 * 默认使用， 进行完整编译， 为生产环境编译使用 `gulp --production`
 */
gulp.task('default', gulp.series('clean', () => {
    gulp.start('build');
}));
