//var Emitter = require("./emitter.js") //se inyectan dependecias
var Emitter = require("events")
var emtr = new Emitter(); //se instancia el emisor de eventos
let config = require("./config")

emtr.on(config.events.GREET, () => {
    console.log("somewhere, someone say hello");
});

emtr.on(config.events.GREET, () => {
    console.log("a greeting occured!");
});

emtr.on(config.events.GREET, () => {
    console.log("someone jumped");
});

console.log("Hello!")
emtr.emit("greet"); //se ejecuta la funcion greet mediante un emisor de eventos

console.log(emtr);
emtr.emit('jump'); //ahora es un emit es un objeto