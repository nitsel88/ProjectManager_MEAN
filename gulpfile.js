const { parallel, series } = require('gulp')
const { src, dest } = require('gulp')
const exec = require('child_process').exec;



function installServerDep(cb) {
 
    let instServDep = exec('cd ./server && npm install');
    instServDep.stdout.on('data', function(data) {
        console.log(data)
    });

    instServDep.on('close', function(code) {
        console.log(`---------------------Server Dependencies Installation Complete with code: ${code}--------------------`)
        cb()
    });   
}


function installUIDep(cb) {
 
    let instUIDep = exec('cd ./ui && npm install')
    instUIDep.stdout.on('data', function(data) {
        console.log(data); 
    });

    instUIDep.on('close', function(code) {
        console.log(`---------------------UI Dependencies Installation complete with code ${code}--------------------`)
        cb()
    });
}

function buildUI(cb) {
 
    let bldUI = exec('cd ./ui && ng build')
    bldUI.stdout.on('data', function(data) {
        console.log(data)
    });
    
    bldUI.stderr.on('data', function(data) {
        console.log(data)
    });

    bldUI.on('close', function(code) {
        console.log(`---------------------UI build complete with code ${code}--------------------`) 
        cb()
    })
   
}

function copyUItoServerPath(cb) {
    src('./ui/dist/project-manager/*').pipe(dest('./server/public/')).on('end', function( ) {
        console.log(`------------------Built files copied to public folder------------------------`)
        cb()
    })    
}

function startServer(cb) {
   let stServer = exec('cd ./server && npm start')

   stServer.stdout.on('data', function(data) {
    console.log(data); 
    cb()
  })

}

exports.depinstall = parallel(installServerDep, installUIDep)
exports.build = series(buildUI, copyUItoServerPath)
exports.buildstart = series(buildUI, copyUItoServerPath, startServer)
exports.start = series(startServer)
exports.default = series(parallel(installServerDep, installUIDep), buildUI, copyUItoServerPath, startServer)