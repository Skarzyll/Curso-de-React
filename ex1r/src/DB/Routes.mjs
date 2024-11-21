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
        .then(res.location(req.get("Referrer") || "/"))
    } catch (error) {
        console.log(error)
    }

})

app.get('/projects', async (req, res) => {
    try {
        const projects = await Project.findAll()
        res.json(projects)
        console.log('Projetos encontrados');
        
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/projects/:id', async (req, res) => {
    try {
        await Project.destroy({
            where: {
                id: req.params.id
            },
            force: true
        })
        .then(console.log('Projeto deletado'))
    } catch (error) {
        res.send('false' + error)
    }
})

app.get('/projects/:id', async (req, res) => {
    try {
        await Project.restore({
            where: {
                id: req.params.id
            },
            force: true
        })
        .then(console.log('Projeto restaurado'))
    } catch (error) {
        res.send('false' + error)
    }
})

app.get('/projects/:id', async (req, res) => {
    try {
        await Project.update({
            where: {
                id: req.params.id
            },
            force: true
        })
        .then(console.log('Projeto atualizado'))
    } catch (error) {
        res.send('false' + error)
    }
})

app.listen(9090, () => console.log('> Server is up and running'))