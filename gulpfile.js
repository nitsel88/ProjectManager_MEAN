const { series } = require('gulp');
const { src, dest } = require('gulp');
const exec = require('child_process').exec;

function buildUI(cb) {
 
    let bldUI = exec('cd ./ui && ng build');
    bldUI.stdout.on('data', function(data) {
        console.log(data); 
        cb()
    });
   
}

function copyUItoServerPath(cb) {
    src('./ui/dist/project-manager/*').pipe(dest('./server/public/')).on('end', function( ) {
        console.log('Built files copied to public folder')
        cb()
    })    
}

function startServer(cb) {
   let stserver = exec('cd ./server && npm start');

   stserver.stdout.on('data', function(data) {
    console.log(data); 
    cb()
  });

}


exports.build = series(buildUI, copyUItoServerPath);
exports.start = series(buildUI, copyUItoServerPath, startServer);
exports.default = series(buildUI, copyUItoServerPath, startServer);