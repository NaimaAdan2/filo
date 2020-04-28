const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Request = require('../models/Requests.js');
const path = require('path');

router.post('/:itemID', (req, res) => {
  req.body.requestStatus = "requested"
  req.body.itemID = req.params.itemID
  Request.create(req.body)
  .then(item => res.redirect("/items"))
  .catch(err => console.log("Error: " + err))
})

module.exports = router;
