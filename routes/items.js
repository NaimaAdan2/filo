const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items.js');
const path = require('path');

router.get('/', (req, res) => {
    Item.findAll()
    .then(items => {
      res.render('items', {
        layout: false,
        items
      })
    })
    .catch(err => console.log("Error:" + err))
})

module.exports = router;
