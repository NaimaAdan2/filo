const Sequelize = require('sequelize');
const db = require('../config/database');

const Item = db.define('Items',{
    category:{
        type: Sequelize.STRING
    },
    colour:{
        type: Sequelize.STRING
    },
    date: {
        type: Sequelize.DATE
    },
    description:{
        type: Sequelize.STRING
    },
    requestStatus:{
        type: Sequelize.ENUM("requested", "not requested", "accepted", "denied")
    },

}) 

module.exports = Item;
