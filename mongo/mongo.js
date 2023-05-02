const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/bdtest', {
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado ao MongoDB');
})
.catch((err) => {
    console.error('Erro ao conectar ao MongoDB', err);
});

//model usuarios


//definindo o model
const UsuarioSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    sobrenome:{
        type: String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    idade:{
        type:Number,
        require: true
    },
    pais:{
        type:String,
        require: true
    }
});
//criando a tabela/colection
mongoose.model('usuarios' , UsuarioSchema)

const usuarioNovo = mongoose.model('usuarios')


  new usuarioNovo({
    nome: 'Matheus',
    email: 'mahdogquod@uogwof.com',
    idade: 12,
    pais: 'bacate'
    
}).save().then(()=>{
    console.log("Salvo com sucesso")  
}).catch((err)=>{
    console.log("Usuario não salvo " +err)  
});

