let greeting = "Hello from greet5"

let greet = () => {
    console.log(greeting)
}

let time = () => {
    console.log(Date())
}

let farewell = () => {
    console.log("Good bye from the greet5")
}

module.exports = {
    greet: greet,
    time: time,
    farewell: farewell
}