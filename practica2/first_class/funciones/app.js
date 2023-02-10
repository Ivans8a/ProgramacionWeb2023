//forma de la funcion tradicional
function greet(){
    console.log("Hello");
}
console.log(greet)
greet(); //invoke

//refactorización de greet
let greet2 = () => console.log("Hello")
greet()

//funcion que tiene como parametro una funcion
function logGreeting(fn){
    fn();
};
logGreeting(greet);

//refactorización de logGreeting
let logGreeting2 = (fn) => fn()
logGreeting2(greet)

//variable que se convierte en una funcion
let greetMe = function(){
    console.log("Hello from the function expression")
}
greetMe()

//refactorización de greetMe
let greetMe2 = () => console.log("Hello from the function expression")
greetMe2()
logGreeting(greetMe);

//¿?
let mifuncion = () => {

}
mifuncion()

//variable que contiene una funcion flecha
let saludo = (nombre, tratamiento) => {
    console.log("Hola" + " " + tratamiento + " " + nombre)
}
saludo("Ivan", "sr")

//funcion sin parentesis para los parametros
let cuadrado = numero => {
    return numero*numero
}

//funcion sin la palabra "return"
let saludo2 = (nombre, tratamiento) => console.log("Hola" + " " + tratamiento + " " + nombre);
saludo2("Katherine", "Mr") //al momento de llamar la funcion olvide ponerle parametros

//funcion compacta
let cuadrado2 = numero => numero*numero

