const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const Item = require('../models/Items.js');
const {isLoggedIn} = require("./util.js")

/*
Get request endpoint for getting an item. Searches the items table
for the item that has an id matching the id query param. Sends back a 500 if there
is an error. Returns a 401 if the user is not logged in
*/
router.get('/:id', (req, res) => {
    isLoggedIn(req, res)
    Item.findAll({where: {id: req.params.id}})
    .then(items => {
      res.render('item', { layout: false, items });
    })
    .catch(err => {
      console.log("Could not get item: " + err)
      res.sendStatus(500)
    });
})

module.exports = router;
