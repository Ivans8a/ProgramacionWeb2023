const mongoose= require('mongoose'); //requerimiento de mongoose
let PersonSchema= new mongoose.Schema({ //esquema de persona
    nombre: String,
    edad: Number,
    tipoSangre: String,
    nss: String
})

module.exports = mongoose.model('Person', PersonSchema); //exportar el modelo de persona



