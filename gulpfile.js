var gulp = require('gulp');
var rev = require('gulp-rev'); //添加版本号 hash码
var revReplace = require('gulp-rev-replace'); //更新index里面的引用
var useref = require('gulp-useref'); //合并注释
var filter = require('gulp-filter'); //过滤器 筛选和恢复
var uglify = require('gulp-uglify'); //压缩js代码
var csso = require('gulp-csso'); //压缩css

gulp.task('default',function(){
    var jsFilter = filter('**/*.js',{restore: true});
    var cssFilter = filter('**/*.css',{restore: true});
    var indexHtmlFilter = filter(['**/*','!**/index.html'],{restore: true});

    return gulp.src('workspace/index.html')
        .pipe(useref())
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore)
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore)
        .pipe(indexHtmlFilter)
        .pipe(rev())
        .pipe(indexHtmlFilter.restore)
        .pipe(revReplace)
        .pipe(gulp.dest('dist'));
});