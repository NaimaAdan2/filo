const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Request = require('../models/Requests.js');
const path = require('path');
const {isLoggedIn} = require("./util.js")

router.post('/:itemID', (req, res) => {
  isLoggedIn(req, res)
  req.body.requestStatus = "requested"
  req.body.itemID = req.params.itemID
  Request.create(req.body)
  .then(item => res.redirect("/items"))
  .catch(err => console.log("Error: " + err))
})

module.exports = router;
