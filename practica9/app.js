const express = require("express"); //importacion de dependencia
const app = express();// declaramos app de express

//ruta raiz
app.get("/", (req, res) => {
    res.send (`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            OWO
        </h1>
        
    </body>
    </html>`)
});

app.listen(3000);//poner a la escucha el server, es decir, levantarlo

//ruta /uno
app.get("/uno", (req, res) => {
    res.send("Hello world from route one")
})