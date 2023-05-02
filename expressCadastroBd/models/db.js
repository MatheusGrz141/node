const Sequelize = require('sequelize')//criação banco de dados

//conexão banco de dados


const sequelize = new Sequelize('postapp' ,'root','ucdb' ,{
    host:'localhost',
    dialect:'mysql',
    query:{raw:true} //coisa pra fazer Precer as informçaões do banco na tela
});
sequelize.authenticate().then(()=>{
    console.log("conectado com sucesso")
}).catch((err)=>{
    console.log("erro ao se conectar"+err)
});


module.exports  = {
    Sequelize: Sequelize,
    sequelize: sequelize
}