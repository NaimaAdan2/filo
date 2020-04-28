const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('Users',{
    username:{
        type: Sequelize.STRING
    },
    firstname:{
        type: Sequelize.STRING
    },
    lastname:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    isAdmin: {
        type: Sequelize.BOOLEAN
    }
})

module.exports = User;
