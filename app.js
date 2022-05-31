const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const app = express()

//arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname+'public/css'))
app.use('/img', express.static(__dirname+'public/img'))
app.use('/js', express.static(__dirname+'public/js'))

//template engine
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('layout','./layouts/layout')
app.set('views',__dirname+'/views')

//Rotas
app.get('/',(req,res)=>{
    //res.send('Servidor iniciado')
    res.render('index',{title: 'Página Inicial', section: 'Pagina inicial',body:'teste '})
})

app.get('/produtos',(req,res)=>{
    //console.log('servidor iniciado')
    //res.send('Servidor iniciado')
    let grid = "Conteúdo da página de produtos"

    
    res.render('/produtos/index',{title: 'Página de produtos', section: 'Produtos', body: grid})
})
/*
app.get('/', (req,res)=>{
    res.end("Servidor ativo")
})
*/
app.listen(3005,console.log('servidor iniciado'))