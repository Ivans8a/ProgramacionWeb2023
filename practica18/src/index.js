const express = require('express'); //requerimiento de express
const app = express(); //levantamiento del servidor
const port = process.env.PORT || 9000; //si se especifica usa el puerto especificado, si no usa el puerto 9000
app.listen(9000, () => console.log('server listening on port', port));//servidor a la escucha