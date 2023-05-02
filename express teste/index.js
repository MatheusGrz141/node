const express = require("express")
const app = express()


/* app.get('/' ,(req,res)=>{
    res.send("bacateee")
}) */
app.get('/' ,(req,res)=>{
    res.sendFile(__dirname+"/JonasBolos/index.html")
})
app.get('/sobre' ,(req,res)=>{
    res.send("sobre")
})

app.get('/blog' ,(req,res)=>{
    res.send("blogg")
})

app.get('/ola/:nome/:cargo/:cor' ,(req,res) =>{

    res.send(`<h1>ola ${req.params.nome} </h1> 
    <h2>seu cargo é ${req.params.cargo} </h2>
    <h3>Sua cor favorita é ${req.params.cor}</h3>`)
    
})








app.listen(6075 , ()=>{
    console.log("servidor rodando")
})