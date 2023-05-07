let express = require("express"); //inyeccion de la dependecia
let router = express.Router();
/*se está creando un nuevo router 
que se puede usar para definir rutas 
para una parte específica de la aplicación*/

router.post('/addStudent', function(req, res){
    res.render('displayData',{ nombre: req.body.nombre,
                               edad: req.body.edad,
                               nss: req.body.nss,
                               tipoSangre: req.body.tipoSangre});
});

router.post('/personJson', express.json({type:'*/*'}), function (req, res){
    console.log(`nombre: ${req.body.nombre}
                apellido: ${req.body.apellido}`)
});

router.get('/student', function (req, res){
    let t=req.params.id
    res.render('student');
});

router.get("/person", (req,res)=>{
    res.send("has solicitado el listado de personas");
});

router.get('/testJson', function (req, res){
    res.render('testJson');
});


module.exports = router;