var gulp = require('gulp');

var uglify = require('gulp-uglify'); //ѹ��

var babel = require('gulp-babel'); //�������

var concat = require('gulp-concat'); //�ϲ�

var browserify = require('gulp-browserify');

//var browserify = require("browserify");

var source = require("vinyl-source-stream");

var reactify = require("reactify");

var webpack = require('gulp-webpack'); // gulp��webpack���ʹ��

var rename = require('gulp-rename'); //�������ļ���


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

//gulp�������õ�����
gulp.task("combine", function () {

    //ͨ��browserify��������
    browserify({
        //��ڵ�,app.jsx
        entries: ["./src/app.js"],
        //����reactify���߽�jsxת��Ϊjs
        transform: [["reactify", {"es6": true}]]
    })
        //ת��Ϊgulp��ʶ�����
        .bundle()
        //�ϲ����Ϊapp.js
        .pipe(source("app.js"))

        //�������ǰ�ļ�����
        .pipe(gulp.dest("./build/js"));
});

gulp.task('default', function () {
    //����js�仯
    gulp.watch('./src/*.js', function () {       //��js�ļ��仯���Զ����� ѹ��
        gulp.run('src');
    });
});