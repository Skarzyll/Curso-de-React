import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('costs', 'root', '26340521', {
    host: 'localhost',
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