const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')

app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/ProjetoRecebido' , (req , res)=>{
    res.render('index')
})


app.listen(9090 , () => console.log('> Server is up and running'))