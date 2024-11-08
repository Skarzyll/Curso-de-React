const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('costs', 'root', '26340521', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(console.log('autenticado'))


const Project = sequelize.define('projects', {
    name: DataTypes.STRING,
    buy: DataTypes.INTEGER
})

Project.sync({force: true})