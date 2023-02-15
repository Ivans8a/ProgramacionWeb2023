//Petición de codigo en otro modulo
let greet = require("./greet");

greet();
//declaracion de un objeto
let persona = {
    nombre: "Ivan", //key
    apellido: "Santoyo", //key
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144", //key
        colonia: "Centro", //key
        cp: 28000, //key
        municipio: "Colima", //key
        getDomicilio: function () {
            return `${this.calle}, ${this.colonia}, ${this.cp}, ${this.municipio}`
        }
    },
}

console.log(persona);
console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.getName()) //Se tiene que poner la instancia "persona"
console.log(persona.domicilio)
console.log(persona.domicilio.getDomicilio()) //Se tiene que poner la instancia "domicilio" que a su vez esta dentro de la instancia "persona"
