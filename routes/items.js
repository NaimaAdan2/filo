const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items.js');
const path = require('path');
const {isLoggedIn} = require("./util.js")


/*
Get request endpoint for getting all items from the item table.
Sends back a 500 if there is an error and a 401 if the user is not logged in
*/
router.get('/', (req, res) => {
    isLoggedIn(req, res)
    Item.findAll()
    .then(items => {
      isAdmin = req.session && req.session.user && req.session.user.isAdmin
      for (let item of items) {
        itemPath = isAdmin ? "/itemadmin/" + item.id : "/item/" + item.id
        item.itemPath = itemPath
        console.log("Item Path: " + item.itemPath)
      }
      res.render('items', {
        layout: false,
        items
      })
    })
    .catch(err => {
      console.log("Could not get items: " + err))
      res.sendStatus(500)
    });
})

module.exports = router;
