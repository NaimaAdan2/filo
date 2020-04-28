const Sequelize = require('sequelize');
const db = require('../config/database');

const Request = db.define('Requests',{
    username:{
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
