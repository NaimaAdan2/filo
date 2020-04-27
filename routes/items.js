const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items.js');
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../pages/items.html'))
})

//router.get('/', (req, res) => 
 //   Item.findAll()
   //  .then(items => {
     //    console.log (items);
       //  res.sendStatus(200);
     //})
     //.catch(err => console.log(err)));

// add item 


module.exports = router; 
