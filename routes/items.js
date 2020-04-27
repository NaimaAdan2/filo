const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Item = require('../models/Items.js');
const path = require('path');

router.get('/', (req, res) => {
    res.render('index', { layout: 'items' });
})

module.exports = router;
