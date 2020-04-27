const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/additem.html'))
    })
    


    module.exports = router; 
    