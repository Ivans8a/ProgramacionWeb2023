var express = require("express"); //importacion de dependencioa
var app = express();//declaramos una app de Express

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche el servidor

app.use("/assets", express.static(__dirname + "public"));

app.set("view engine", "ejs");
//primera ruta (esta al nivel de la raiz/), Hello World!
app.get("/", function (req, res){
    cad=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="/assets/style.css" type="text/css">
    </head>
    <body>
        <h1>
            HEllo world!
        </h1>
    </body>
    </html>`;
    res.send(cad)
});

//segunda ruta /api, regresa un objeto JSON simulando la respuesta de una api
app.get("/api", function (req, res){
    res.json({firstname: "Ivan", lastname: "Santoyo"});
});

//tercera ruta, recibe un parametro
app.get('/person/:id', function(req, res) {
    let message = req.query.message;
    let times = parseInt(req.query.times);
    let person = req.params.id;
    
    switch (message) {
        case "Hola":
        case "Adios":
        case "Bienvenido":
            break;
        default:
            message = "Hola";
    }

    var cad = "";
    if (!isNaN(times) && times > 0) {
        for (var i = 0; i < times; i++) {
            cad+= message + " " + person + "\n";
        }
    }

    res.render('person', {
        ID: req.params.id,
        message: message,
        times: times,
        cad: cad
    });
});
app.listen(port); //levantar el sever y ponerlo a la escucha


