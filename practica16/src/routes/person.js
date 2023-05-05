let express = require("express"); //inyeccion de la dependecia
let router = express.Router();
/*se está creando un nuevo router 
que se puede usar para definir rutas 
para una parte específica de la aplicación*/

router.get("/person", (req,res)=>{
    res.send("has solicitado el listado de personas");
})

module.exports = router;