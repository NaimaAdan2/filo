const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');

router.get('/', (req, res) => {
    res.render('register', { layout: false });
})

router.post('/', (req, res) => {
    req.body.isAdmin = req.body.username == "admin" && req.body.password == "admin"
    User.findOne({where: {username: req.body.username}})
     .then(maybeuser => {
        if (!maybeuser) {
            User.create(req.body)
            .then(user => {
                req.session.user = user
                res.redirect("/items")
             })
         } else {
            res.redirect("/register")
         }
    })
   .catch(err => console.log(err))
})



module.exports = router;
