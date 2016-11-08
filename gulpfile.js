var gulp=require('gulp');
var uglify=require('gulp-uglify');//压缩
var babel=require('gulp-babel');//解析插件
var concat=require('gulp-concat');//合并
gulp.task('dist',function(){
    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});
gulp.task('src',function(){
    gulp.src('./src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});

gulp.task('default', function () {
    //监听js变化
    gulp.watch('./src/*.js', function () {       //当js文件变化后，自动检验 压缩
        //gulp.run('lint', 'scripts');
        gulp.run('src');
    });
});