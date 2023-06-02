const express=require('express');//requerimiento de express
const router=express.Router();//requerimiento de las rutas de express
const mongoose=require('mongoose');//requerimiento de mongoose
let Person= require('../models/person');//requerimiento del modelo de persona

router.get('/gente', async (req, res)=>{    //ruta para obtener todas las personas
    const Persons = await Person.find({});  //obtener todas las personas
    res.render('person.ejs', { Persons });  //renderizar la vista de personas
})

router.get('/addPerson', (req, res)=>{ //ruta para agregar una persona
    res.render('addPerson');
});

router.post('/addPerson', (req, res)=>{ //ruta para agregar una persona
    const newPerson = new Person({      //creacion de una nueva persona
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson   
    .save()    //guardar la nueva persona
    .then((data)=>{res.redirect('/gente')}) //redireccionar a la vista de personas  
    .catch((error)=>{res.json({message:error})})    //mostrar error
});

router.get('/findById/:id', async (req, res)=>{
    Person.findById(req.params.id) //buscar una persona por id
    .then((myPerson)=>{res.render('personUpdate', {myPerson})}) //renderizar la vista de actualizar persona
    .catch((error)=>{res.json({message:error})})    //mostrar error
});

router.post('/updatePerson', (req, res) => { // Ruta para procesar el formulario para actualizar los datos de una persona
    Person.findByIdAndUpdate(req.body.objId, { // Actualiza los datos de la persona con los valores proporcionados en el formulario
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
        }).then((data) => { res.redirect('/gente') }) // Redirecciona a la vista de personas a 
        .catch((error) => { res.json({ message: error }) });
});

module.exports=router;  //exportar las rutas