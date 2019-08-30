var gulp = require("gulp");
var uglify = require("gulp-uglify");
var babel = require("gulp-babel");
var sass = require("gulp-sass");
var browser = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var fs = require("fs");
var server = require("http");
var url = require("url");
gulp.task("js",function(done){
	gulp.src("./src/js/*.js")
	.pipe(babel({
		"presets":["@babel/env"]
	}))
	.pipe(uglify())
	.pipe(gulp.dest("./dist/js"));
	done();
});
gulp.task("css",function(done){
	gulp.src("./src/css/*")
	.pipe(sass())
	.pipe(gulp.dest("./dist/css"));
	done();
});
gulp.task("html",function(done){
	gulp.src("./src/*.html")
	.pipe(gulp.dest("./dist"));
	done();
})
gulp.task("img",function(done){
	gulp.src("./src/images/*")
	.pipe(imagemin())
	.pipe(gulp.dest("./dist/images"));
	done();
})
gulp.task("php",function(done){
	gulp.src("./src/php/*")
})
//顺序执行
gulp.task("save",gulp.series(gulp.parallel("js","css","html","img"),function(done){
	browser.reload();
	done();
}));
//并行执行
//gulp.task("save",gulp.parallel("js","css"));

gulp.task("server",function(){
	browser.init({
		server:"./dist",
		port:"7777"
	})
	gulp.watch("./src",gulp.series("save"));
})
