const express = require('express')
const app = express() //inicia la aplicacion

app.get('/', function (req, res) {
  res.send('Hello World')
})//codigo que se ejecuta cuando llega una peticion

app.listen(3000) //puerto que se usa