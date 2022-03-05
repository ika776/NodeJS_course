// var url = 'http://medium.com/log';

function log(message){
    //send http request
    console.log(message);
}

// module.exports.log=log;
// module.exports.endpoint=url;

const EventEmitter = require('events');
var url = 'http://medium.com';

class Logger extends EventEmitter{
    log(message){
        //send http request
        console.log(message);

        //Raise an Event
        this.emit('Message Logged', 
        { id:1, url:'http://a.com'})
    }
}
module.exports=Logger;