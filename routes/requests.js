const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Request = require('../models/Requests.js');
const path = require('path');

router.post('/', (req, res) => {
  Request.create(req.body)
  .then(item => res.redirect("/items"))
  .catch(err => console.log("Error: " + err))
})

module.exports = router;
