var Emitter = require("./emitter.js") //se inyectan dependecias
var emtr = new Emitter(); //se instancia el emisor de eventos

emtr.on("greet", () => {
    console.log("somewhere, someone say hello") //se crea un comportamiento para la funcion greet
})

emtr.on("greet", () => {
    console.log("A greeting occurred!") // se crea otro comportamiento para la funcion greet
})

emtr.on ("greet", ()=>{
    console.log("some one jumped")
})

console.log("Hello!")
emtr.emit("greet"); //se ejecuta la funcion greet mediante un emisor de eventos

console.log(emtr);
emtr.emit('jump'); //ahora es un emit es un objeto