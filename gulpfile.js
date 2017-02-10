var gulp = require('gulp');

var uglify = require('gulp-uglify'); //压缩

var babel = require('gulp-babel'); //解析插件

var concat = require('gulp-concat'); //合并

var browserify = require('gulp-browserify');

//var browserify = require("browserify");

var source = require("vinyl-source-stream");

var reactify = require("reactify");

var webpack = require('gulp-webpack'); // gulp好webpack结合使用

var rename = require('gulp-rename'); //重命名文件名


gulp.task('gulpweb', function () {

    return gulp.src('src/app.js')
        .pipe(webpack({

            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    }
                ]
            }
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('gulpwebse', function () {
    return gulp.src('src/appes.js')
        .pipe(webpack({

            module: {
                loaders: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel'
                    }
                ]
            }
        }))
        .pipe(rename('appes.js'))
        .pipe(gulp.dest('build/js'));
});


gulp.task('dist', function () {
    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('src', function () {
    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('student', function () {
    gulp.src('./sutdentList/src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./sutdentList/dist'));
});

gulp.task('studentuglify', function () {
    gulp.src('./sutdentList/src/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./sutdentList/dist'));
});
gulp.task('address', function () {
    gulp.src('./newAddMobile/src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./newAddMobile/dist'));
});

gulp.task('scriptreq', function () {
    // Single entry point to browserify
    //gulp.run('srchuan');
    gulp.src('srchuan/app.js', {read: false})

        .pipe(browserify({}))
        .pipe(gulp.dest('./build/js'))
});

gulp.task('runall', function () {
    // Single entry point to browserify
    gulp.run('srchuan');
    gulp.run('scriptreq');

});

gulp.task('srchuan', function () {
    gulp.src(['./src/appes.js', './src/app.js', './src/foo.js', './src/esfoo.js'])
        .pipe(babel())
        .pipe(gulp.dest('./srchuan'));
});

gulp.task('scriptreqs', function () {
    // Single entry point to browserify
    gulp.run('srchuan');
    gulp.src('srchuan/appes.js', {read: false})

        .pipe(browserify({}))

        .pipe(gulp.dest('./build/js'))
});

//gulp主动设置的命令
gulp.task("combine", function () {

    //通过browserify管理依赖
    browserify({
        //入口点,app.jsx
        entries: ["./src/app.js"],
        //利用reactify工具将jsx转换为js
        transform: [["reactify", {"es6": true}]]
    })
        //转换为gulp能识别的流
        .bundle()
        //合并输出为app.js
        .pipe(source("app.js"))

        //输出到当前文件夹中
        .pipe(gulp.dest("./build/js"));
});

gulp.task('default', function () {
    //监听js变化
    gulp.watch('./src/*.js', function () {       //当js文件变化后，自动检验 压缩
        gulp.run('src');
    });
});