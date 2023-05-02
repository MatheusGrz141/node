const Sequelize = require('sequelize')
const sequelize = new Sequelize('test' ,'root','ucdb' ,{
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate().then(()=>{
    
    console.log("conectado com sucesso")
}).catch((err)=>{
    
    console.log("erro ao se conectar"+err)
});


const Postagem = sequelize.define('postagens',{
    /* isso é a Model */
    titulo :{ 
        type:Sequelize.STRING
    },
    conteudo :{ 
        type:Sequelize.TEXT
    } 
})
/* povoar o campo */
Postagem.create({
    titulo:'bacate',
    conteudo:'sgeeeeevaeeeeeeeeeeeeeeeeee'
})

/*esta linha deve ser executada uma vez só,
pois sincroniza o cosdigo com o banco de dados:
Postagem.sync({force:true})*/

const Usuario = sequelize.define('usuarios',{
    nome :{
        type:Sequelize.STRING
    },
    sobrenome :{
        type:Sequelize.STRING
    },
    idade :{
        type:Sequelize.INTEGER
    },
    email :{
        type:Sequelize.STRING
    }
})
/* povoar o campo */
Usuario.create({
    nome:'bacate',
    sobrenome:'Antonio',
    idade: 12 ,
    email: 'vwuovc@ucdb.br'
})
/* 
esta linha deve ser executada uma vez só,
pois sincroniza o cosdigo com o banco de dados:
Usuario.sync({force:true})

*/
