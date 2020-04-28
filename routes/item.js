const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
    res.render('item', { layout: false });
})



module.exports = router;
