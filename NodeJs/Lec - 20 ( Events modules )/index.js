// Events module 

// Node.js has a built-in module , called "Events" ,
// where you can create- , fire-, and listen for- your own events


// Example -1 - Registering for the events to be fired only one time using once.

// Example - 2 - Create an event emitter instance and Register a couole of callbacks

// Example- 3 - Registering for the evnts with callback parameters

const EventEmitter = require("events");

// const http = require('http');

const event = new EventEmitter();



event.on('checkPage' , (sc , msg) => {
    console.log(`status code is ${sc} and the page is &{msg}`);
})
event.on('sayMyName', () => {
    console.log("Your name is Rishabh")
});

event.on('sayMyName', () => {
    console.log("Your name is Singh")
});

event.on('sayMyName', () => {
    console.log("Your name is Raj")
});

event.emit('checkPage' , 200 , ok);

