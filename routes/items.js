const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items.js');
const path = require('path');
const {isLoggedIn} = require("./util.js")

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
    .catch(err => console.log("Error:" + err))
})

module.exports = router;
