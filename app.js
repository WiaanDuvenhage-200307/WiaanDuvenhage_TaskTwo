const path = require('path');

var objPath = path.parse(__dirname);

console.log(objPath);

const os = require('os');

var totalMem = os.totalmem();
var freeMem = os.freemem();

var totalMemMb = Math.round(totalMem / 1000000);
var totalMemGb = Math.round(totalMemMb/1000);

var freeMemMb = Math.round(freeMem / 1000000);
var freeMemGb = Math.round(freeMemMb/1000);

console.log(`Total Device Memory: ${totalMem} bytes`);
console.log(`Free Memory: ${freeMem} bytes`);

// Memory in MB
console.log(`Total Device Memory: ${totalMemMb}MB`);
console.log(`Free Memory: ${freeMemMb} MB`);

// Memory in GB
console.log(`Total Device Memory: ${totalMemGb}GB`);
console.log(`Free Memory: ${freeMemGb}GB`);


const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

fs.readdir('./', function(err, files){
    if(err) return console.log("There was a problem", err);
    else return console.log('Files:', files);
})

const eventEmitter = require('events');

const emitter = new eventEmitter();

// Listening for event
emitter.on('sentMessage', function(){
    // Function
    console.log('The Message has been received!');
});

emitter.on('sentUserName', function(){
    // Function
    console.log('The username is James!');
});

emitter.emit('sentUserName');


//! HOMEWORK

//? DNS module can be used to get IP Addresses of Hosts
const dns = require('dns');

// Looking up IP Address of Evetech.co.za
dns.lookup('www.evetech.co.za', (err, value) => {
    // if there is no error console.log the entered domain
    if(!err) return console.log(value);
    // console logs the IP Address of Facebook (102.132.100.35)
})


// ? Crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions
const crypto = require('crypto');
const secret = '123456';
const hash = crypto.createHmac('sha256', secret).update('Hello, my name is Wiaan').digest('hex');
console.log(hash);
// console.log returns 0cf800e07758fa7ecf95d0507c29a48ddfc09eee7358e643d3c804150cc7bd30


