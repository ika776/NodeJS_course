//Global Object

/**console.log();
setTimeout();
clearTimeout();

setInterval();
clearInterval();*/

// var message='';
// console.log(global.message);

// console.log(module);

// var logger= require('./logger')
// // console.log(logger);
// // console.log('message');
// // console.log.log(message);
//  console.log(arguments);


//Path Module
// const path = require('path')
// var pathObj= path.parse(__filename);
// console.log(pathObj);



//OS Modules
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log('Total memory : ' + totalMemory);

// //Template string
// console.log(`Free Memory : ${freeMemory}`);

//File System
// const fs = require('fs');
// const files =fs.readdirSync('./')
// console.log(files);

// fs.readdir('./', function (err,file){
//     if(err) console.log('Error ',err);
//     else console.log('Results', file);
// })

// //Event Module
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //Register a Listener
// emitter.on('Message logged', function(){
//     console.log('Listener called');
// })

// //Raise Event
// emitter.emit('Message logged')


//Extending EventEmitter
const EventEmitter = require('events');
const Logger =require('./logger')
const logger = new Logger();

//Register a Listener
logger.on('Message logged', (arg)=>{
    console.log('Listener called', arg);
})

//Raise Event
logger.log('Message logged')