const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');

/*
Get request endpoint for logging out. Resets the session to not include
the current user
*/
router.get('/', (req, res) => {
  req.session.reset();
  res.redirect('/');
})

module.exports = router;
