const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.render('register', { layout: false, isLoggedIn: req.session && req.session.user });
})

router.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);
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
