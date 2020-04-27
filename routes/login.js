const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/../pages/login.html'))
        // return User.findOne({where: {username: req.body.username, password: req.body.password}})
        // .then(maybeuser => {
        //     if (!maybeuser) {
        //         return res.send("unknown user")
        //     } else {
        //         return res.send("logged in")
        //     }

        // })
        // .catch(err => console.log(err))
})
    


module.exports = router; 
