const Sequelize = require('sequelize');
const db = require('../config/database');

// Defines the Requests table. ItemID is the primary key for an Item entry
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
    reason:{
        type: Sequelize.STRING
    },
    requestStatus:{
        type: Sequelize.ENUM("requested", "accepted", "denied")
    },
})

module.exports = Request;
