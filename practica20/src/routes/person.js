const express=require('express');//requerimiento de express
const router=express.Router();//requerimiento de las rutas de express
const mongoose=require('mongoose');//requerimiento de mongoose
let Person= require('../models/person');//requerimiento del modelo de persona

router.get('/gente', async (req, res)=>{    //ruta para obtener todas las personas
    const Persons = await Person.find({});
    res.json(Persons);
})

router.get('/addPerson', (req, res)=>{ //ruta para agregar una persona
    res.render('addPerson');
});

router.post('addPerson', (req, res)=>{ //ruta para agregar una persona
    const newPerson = new Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
    .save()
    .then((data)=>{res.redirect('/gente')})
    .catch((error)=>{res.json({message:error})})
});

module.exports=router;