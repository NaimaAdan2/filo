const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const Item = require('../models/Items.js');


router.get('/:id', (req, res) => {
    Item.findAll({where: {id: req.params.id}})
    .then(items => {
      res.render('item', { layout: false, items });
    })
})



module.exports = router;
