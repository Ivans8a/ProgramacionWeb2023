const express = require('express'); //requerimiento de express
const mongoose = require('mongoose')
require('dotenv').config();
const app = express(); //levantamiento del servidor
const port = process.env.PORT || 9000; //si se especifica usa el puerto especificado, si no usa el puerto 9000
app.listen(9000, () => console.log('server listening on port', port));//servidor a la escucha

//routes
app.get('/', (req, res) => {
    res.send("Welcome to my API")
})

//mongo db conecction
mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log('Conected to mongo db atlas'))
.catch((error) => console.log(error));