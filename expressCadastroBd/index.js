const express = require("express")
const app = express();
const handlebars = require('express-handlebars')//criação do handlebars html com variaveis
const bodyParser = require('body-parser');
const Post = require('./models/Post')


//body parser (html com o bancoo de dados)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Config
//Template Engine

app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars')


//Rotas
app.get('/', (req,res)=>{
    
    Post.findAll({order: [['id', 'DESC']]}).then((posts)=>{
        res.render('home' , {posts: posts})
        console.log(posts)
    })  
    
})

app.get('/cadastro', (req,res)=>{ 
    
    res.render('formulario')
})

app.post('/enviado', (req,res)=>{
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(()=>{
        res.redirect('/')
    }).catch((err)=>{
        res.send("Cadastro NÃO realizado erro: "+err)
    })
})

app.get('/deletar/:id' ,(req , res)=>{
    Post.destroy({where : {'id': req.params.id}}).then(()=>{
        res.send( ` 
        <h1>POst deletado com sucesso </h1> 
        <form action="/" method="get">
         
        <button type="submit">Página Inicial</button>
        </form>`)
      
    }
    ).catch ((err)=>{
        res.send(`post não deletado ${err}`)
    })
}
)

app.listen(6067 , ()=>{
    console.log("servidor rodando")
})