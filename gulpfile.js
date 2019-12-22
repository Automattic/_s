const { dest, parallel, series, src, watch } = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const minimist = require("minimist");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const webpack = require("webpack-stream");

const paths = {
  public: "./public",
  js: "./src/js",
  scss: "./src/scss"
};

const knownFlags = {
  boolean: ["production"],
  string: ["proxy"],
  default: {
    production: false,
    proxy: "underscores.localhost"
  }
};

const flags = minimist(process.argv.slice(2), knownFlags);

function stylesTask() {
  return src(`${paths.scss}/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: flags.production ? "compressed" : "expanded"
      })
    )
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write("/"))
    .pipe(dest(`${paths.public}/css`))
    .pipe(browserSync.stream());
}

function scriptsTask() {
  process.env.WEBPACK_MODE = flags.production ? "production" : "development";

  return src(`${paths.js}/index.js`)
    .pipe(webpack(require("./webpack.config.js")))
    .on("error", function() {
      this.emit("end");
    })
    .pipe(dest(`${paths.public}/js`))
    .pipe(browserSync.stream());
}

function watchTask() {
  watch(
    [`${paths.scss}/**/*.scss`, `${paths.js}/**/*.js`],
    series(parallel(stylesTask, scriptsTask))
  );
}

function startServer() {
  browserSync.init({
    proxy: flags.proxy,
    notify: false,
    online: true
  });

  watchTask();
}

exports.styles = stylesTask;
exports.scripts = scriptsTask;
exports.build = series(stylesTask, scriptsTask);
exports.default = series(parallel(stylesTask, scriptsTask), startServer);
