const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const Item = require('../models/Items.js');
const path = require('path');
const {isLoggedIn} = require("./util.js")


// All endpoints return a 401 if the user is not logged in

// Get request for the additem html page
router.get('/', (req, res) => {
    isLoggedIn(req, res)
    res.render('additem', { layout: false });
})

/*
Post request endpoint for adding an item. Creates an item entry using
the details from the user's payload information. Sends back a 500 if there
is an error.
*/
router.post('/', (req, res) => {
  isLoggedIn(req, res)
  Item.create(req.body)
  .then(item => res.redirect("/items"))
  .catch(err => {
    console.log("Could not create item entry: " + err))
    res.sendStatus(500)
  });
})

module.exports = router;
