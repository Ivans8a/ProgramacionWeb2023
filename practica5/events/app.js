let obj = {
    nombre: "Ivan",
    edad: 21,
    apellido: "Santoyo",
    keypress: function () {
        console.log("se ha presionado una tecla")
    },
    mouseOver: function () {
        console.log("el puntero del mouse esta arriba")
    }
}

console.log(obj.nombre);
console.log(obj["nombre"]);

let myKey = "nombre"
console.log(obj[myKey])

myKey = "keypress";
console.log(obj[myKey]())//se ejecuta la funcion keypress
myKey = "mouseOver";
console.log(obj[myKey]())//se ejecuta la funcion mouseOver

let myArray = [];

myArray.push(4);
myArray.push("Una cadena");
myArray.push(obj);
myArray.push(function (){
    console.log("Hola desde el array")
});

console.log(myArray)
console.log(myArray[2].mouseOver()) //se llama una funcion desde un elemento de un array que tiene almacenado un objeto el cual tiene una funcion dentro

let funcArray = [];
funcArray.push(() => {
    console.log("Funcion 1")
})

funcArray.push(() => {
    console.log("Function 2")
})

funcArray.push(() => {
    console.log("Function 3")
})

funcArray.forEach((item) => { //por cada elemeto del array lo va a ejecutar como funcion
    item()
})
 //asd


