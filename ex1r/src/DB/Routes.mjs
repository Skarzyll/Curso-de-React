import express from 'express'
import Project from './Server.mjs'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post('/', async (req, res) => {
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

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/delete/:id', async (req, res) => {
    try {
        Project.destroy({
            where: {
                'id': req.params.id
            }
        })
        .then(console.log('ok'))
    } catch (error) {
        res.send('false' + error)
    }
})

app.listen(9090, () => console.log('> Server is up and running'))