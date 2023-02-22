let greet = require("./greet1");
let greet2 = require("./greet2").greet; // lo mas comun
let greet2a = require("./greet2");
const greet3 = require("./greet3")
const Greet4 = require("./greet4");
const greet5 = require("./greet5");
greet5.greet()
greet5.time()
greet5.farewell()
let myGreet = new (Greet4);
myGreet.greet();
greet()
greet2()
greet2a.greet()

console.log(greet3);
greet3.greet();
greet3.greeting = "Hello from the app"
let greet3b = require("./greet3");
const greet4 = require("./greet4");
greet3b.greet();

