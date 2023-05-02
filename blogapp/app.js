const express = require('express');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const admin = require('./routes/admin')
const path = require("path");//manipular pastas e diretórios.
const { threadId } = require('worker_threads');
//Configurações

    //body parser recebe dados de qualquer tipo de formulários
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    //handlebars muitas funcionalidades ao html ,
    //variavies compartilhadas entre o js e o html

        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
        app.set('view engine', 'handlebars')

    //mongoose
    mongoose.connect('mongodb://127.0.0.1:27017/blogapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
        })
        .then(() => {
            console.log('Conectado ao MongoDB');
        })
        .catch((err) => {
            console.error('Erro ao conectar ao MongoDB', err);
        });



    //Public
      app.use(express.static(path.join(__dirname,'public')))



//Rotas

app.get("/" , (req,res)=>{
    res.render("../views/admin/_navbar")
})
app.use('/admin',admin)
//outros

const port = 8081
app.listen(port , ()=>{
    console.log("Conectado no Servidor")
})
