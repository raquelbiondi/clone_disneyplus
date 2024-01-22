const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() { 
    return gulp.src('./src/styles/*scss')//com esta função nós apenas recuperamos os arquivos, ainda não estamos compilando o sass. Pra encadear essa compilação do sass aqui, temos que usar o Pipe
    .pipe(sass({ outputStyle: 'compressed'})) //em seguida temos q enviar esses aquivos CSS já comprimidos p/ uma pasta
    .pipe(gulp.dest('./dist/css')); //dist --> pasta de destino
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*scss', gulp.parallel(styles)) //passamos os arquivos q serão observados e passamos como parâmetro as funções que serão executadas
}