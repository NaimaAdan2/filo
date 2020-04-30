const Sequelize = require('sequelize');
const db = require('../config/database');

// Define the Items table. ImageURL is text to allow for arbitarly long urls
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
        type: Sequelize.TEXT
    },
})

module.exports = Item;