const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const Item = require('../models/Items.js');
const {isLoggedIn} = require("./util.js")

router.get('/:id', (req, res) => {
    isLoggedIn(req, res)
    Item.findAll({where: {id: req.params.id}})
    .then(items => {
      res.render('item', { layout: false, items });
    })
})



module.exports = router;
