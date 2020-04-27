const Sequelize = require('sequelize');

const sequelize = new Sequelize('FiLo','postgres','260912',{
    host:'localhost',
    dialect: 'postgres',
    operatorsAliases: false, 

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
})

sequelize.sync()

module.exports = sequelize;

