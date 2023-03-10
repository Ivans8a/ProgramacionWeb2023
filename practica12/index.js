var express = require("express"); //importacion de dependencioa
var app = express();//declaramos una app de Express

var port = process.env.PORT || 3000; //seteamos el puerto para que escuche el servidor

app.set("view engine", "ejs");
app.use("/assets", express.static(__dirname + "public"));

//primera ruta (esta al nivel de la raiz/), Hello World!
app.get("/", function (req, res){
    res.render("index")
});

//segunda ruta /api, regresa un objeto JSON simulando la respuesta de una api
app.get("/api", function (req, res){
    res.json({firstname: "Ivan", lastname: "Santoyo"});
});

//tercera ruta, recibe un parametro
app.get("/person/:id", function (req, res) {
    res.render("person", { ID: req.params.id});
});
app.listen(port); //levantar el sever y ponerlo a la escucha


