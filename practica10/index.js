var express = require("express"); //importacion de dependencioa
var app = express();//declaramos una app de Express

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche el servidor

//primera ruta (esta al nivel de la raiz/), Hello World!
app.get("/", function (req, res){
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Hello World!
        </h1>
    </body>
    </html>`)
});

//segunda ruta /api, regresa un objeto JSON simulando la respuesta de una api
app.get("/api", function (req, res){
    res.json({firstname: "Ivan", lastname: "Santoyo"});
});

//tercera ruta, recibe un parametro
app.get("/person/:id", function (req, res) {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>
            Person: ${req.params.id}
        </h1>
    </body>
    </html>`)
})
app.listen(port); //levantar el sever y ponerlo a la escucha


