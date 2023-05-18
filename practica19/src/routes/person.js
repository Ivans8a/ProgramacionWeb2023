const express=require('express');//requerimiento de express
const router=express.Router();//requerimiento de las rutas de express
const mongoose=require('mongoose');//requerimiento de mongoose
let Person= require('../models/person');//requerimiento del modelo de persona

router.get('/gente', async (req, res)=>{    //ruta para obtener todas las personas
    const Persons = await Person.find({});
    res.json(Persons);
})

module.exports=router;