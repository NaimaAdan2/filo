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
    imageURL:{
        type: Sequelize.STRING
    },
})

module.exports = Item;
