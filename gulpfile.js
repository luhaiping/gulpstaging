var gulp=require('gulp');
var uglify=require('gulp-uglify');//ѹ��
var babel=require('gulp-babel');//�������
var concat=require('gulp-concat');//�ϲ�
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
    //����js�仯
    gulp.watch('./src/*.js', function () {       //��js�ļ��仯���Զ����� ѹ��
        //gulp.run('lint', 'scripts');
        gulp.run('src');
    });
});