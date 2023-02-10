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
let logGreeting2 = (miParametro) => miParametro()
logGreeting2(greet)
logGreeting2(function () {
    console.log("Hello from a function created on the fly")
})

//interpolación de strings
let logGreeting1 = (miNombre, miColor) => {
    console.log("Hola "+miNombre+" buenos dias! Tu color favorito es el "+ miColor)
}
logGreeting1("Ivan", "azul")

//variable que se convierte en una funcion
let greetMe = function(){
    console.log("Hello from the function expression")
}
greetMe()

//refactorización de greetMe
let greetMe2 = () => console.log("Hello from the function expression")
greetMe2()
logGreeting(greetMe);

//funcion flecha
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

let talla = "M";
let modelo = "clasico";
let color = "rojo";

console.log("Juan tiene una playera talla "+talla+" modelo "+modelo+" color "+color);
console.log(`Juan tiene una playera talla ${talla} modelo ${modelo} color ${color}`)





