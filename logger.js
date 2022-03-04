var url = 'http://medium.com/log';

function log(message){
    //send http request
    console.log(message);
}

module.exports.log=log;
module.exports.endpoint=url;