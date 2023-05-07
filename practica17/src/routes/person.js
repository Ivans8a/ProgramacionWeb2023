// Importamos la dependencia Express
let express = require("express");

// Creamos un nuevo Router
let router = express.Router();

/*
Creamos una ruta con el método HTTP POST 
para la url /addStudent, que renderiza la vista 
'displayData' y pasa como parámetros los datos 
enviados en el cuerpo de la solicitud (req.body)
*/
router.post('/addStudent', function(req, res){
    res.render('displayData', {
        nombre: req.body.nombre,
        edad: req.body.edad,
        nss: req.body.nss,
        tipoSangre: req.body.tipoSangre
    });
});

/*
Creamos una ruta con el método HTTP POST 
para la url /personJson, que parsea el cuerpo 
de la solicitud como JSON y logea en la consola 
el nombre y el apellido recibidos en el cuerpo
*/
router.post('/personJson', express.json({type:'*/*'}), function (req, res){
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`);
});

/*
Creamos una ruta con el método HTTP GET 
para la url /student, que renderiza la vista 'student'
y utiliza el parámetro de la URL (req.params.id) 
para realizar alguna acción
*/
router.get('/student', function (req, res){
    let t = req.params.id; // Obtenemos el parámetro de la URL
    res.render('student'); // Renderizamos la vista 'student'
});

/*
Creamos una ruta con el método HTTP GET 
para la url /person, que envía la cadena de texto 
"has solicitado el listado de personas" como respuesta
*/
router.get("/person", (req, res)=>{
    res.send("has solicitado el listado de personas");
});

/*
Creamos una ruta con el método HTTP GET 
para la url /testJson, que renderiza la vista 'testJson'
*/
router.get('/testJson', function (req, res){
    res.render('testJson');
});

// Exportamos el Router para poder utilizarlo en otros archivos
module.exports = router;
