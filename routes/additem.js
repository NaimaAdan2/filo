const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
        res.render('index', { layout: 'additem' });
})



module.exports = router;
