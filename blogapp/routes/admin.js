const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/Categoria")
const Categoria = mongoose.model("categorias")


router.get('/',(req,res)=>{
    res.render("admin/index")
})
router.get('/posts',(req,res)=>{
    res.send('Página principal dos posts')
})
router.get('/categorias',(req,res)=>{
    res.render('admin/categorias')
})
router.get('/categorias/add',(req,res)=>{
    res.render('admin/addcategoria')
})
router.post('/categorias/nova',(req,res)=>{
    const novaCategoria = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categoria(novaCategoria).save().then(()=>{
        console.log("Categoria salva com sucesso!!!");
    }).catch((err)=>{
        console.log("Categoria salva com erro "+err);
    })
    
    
})

module.exports = router;