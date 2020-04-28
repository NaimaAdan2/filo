const Sequelize = require('sequelize');
const db = require('../config/database');

const Request = db.define('Requests',{
    firstname:{
        type: Sequelize.STRING
    },
    lastname:{
        type: Sequelize.STRING
    },
    itemID:{
        type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.STRING
    },
    requestStatus:{
        type: Sequelize.ENUM("requested", "accepted", "denied")
    },
})

module.exports = Request;
