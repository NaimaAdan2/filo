const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const Item = require('../models/Items.js');
const path = require('path');
const {isLoggedIn} = require("./util.js")

router.get('/', (req, res) => {
    isLoggedIn(req, res)
    res.render('additem', { layout: false });
})

router.post('/', (req, res) => {
  isLoggedIn(req, res)
  Item.create(req.body)
  .then(item => res.redirect("/items"))
  .catch(err => console.log("Error: " + err))
})

module.exports = router;
