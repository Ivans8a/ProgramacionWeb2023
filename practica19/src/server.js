const express = require('express'); //requerimiento de express
const mongoose = require('mongoose'); //requerimiento de mongoose
const PersonRoutes=require('./routes/person'); //requerimiento de las rutas de person
const person = require('./models/person');
require('dotenv').config(); //requerimiento variable de ambiente para MONGODB_URI
mongoose.Promise = global.Promise; //promesa global de mongoose
const app = express(); //levantamiento del servidor
const port = process.env.PORT || 3000; //si se especifica usa el puerto especificado, si no usa el puerto 9000
app.listen(3000, () => console.log('server listening on port', port));//servidor a la escucha

app.set('view engine', 'ejs'); //motor de plantillas
app.use(express.urlencoded({extended: false})); //middleware para recibir datos de formularios
app.use(PersonRoutes); //middleware para usar las rutas de person

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API")
})

//mongo db conecction
mongoose
.connect(process.env.MONGODB_URI) //variable de entorno
.then(()=>console.log('Conectado a test')) //succsesfully conected
.catch((error) => console.log(error));//error conecction