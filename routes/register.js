const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');



router.get('/', (req, res) => {
    res.render('register', { layout: false });
})

router.post('/', (req, res) => {
    req.body.isAdmin = false
    User.findOne({where: {username: req.body.username}})
     .then(maybeuser => {
        if (!maybeuser) {
            return User.create(req.body)
            .then(user => {
                res.redirect("/items")
             })
         } else {
            res.redirect("/register")
         }
    })
   .catch(err => console.log(err))
})



module.exports = router;
