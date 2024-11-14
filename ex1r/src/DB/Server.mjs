import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('costs', 'root', '26340521', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

sequelize.authenticate().then(console.log('autenticado'))


const Project = sequelize.define('projects', {
    name: DataTypes.STRING,
    buy: DataTypes.INTEGER,
    categoria_id: DataTypes.STRING
})

//Project.sync({force: true})

export default Project
