import express from 'express'
import Project from './Server.mjs'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.post('/' , async (req , res)=>{
    try {
        await Project.create({
            name: req.body.name,
            buy: req.body.buy,
            categoria_id: req.body.categoria_id
        })
    } catch (error) {
        console.log(error)
    }
})


app.listen(9090, () => console.log('> Server is up and running'))