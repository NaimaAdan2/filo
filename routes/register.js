const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const bcrypt = require('bcrypt');

/*
Get request for the register html page. Returns whether or not a user is isLoggedIn
to change the navbar
*/
router.get('/', (req, res) => {
    res.render('register', { layout: false, isLoggedIn: req.session && req.session.user });
})


/*
Post request endpoint for creating a user. Checks to see if a user already exists
with the username. If so redirects you back to the log in page and displays a message.
If not creates a user and adds the user to the session. Redirects you to the items page.
Returns a 500 if there is an error and redirects back to the login page
*/
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
    .catch(err => {
      console.log("Could not create a user: " + err)
      res.sendStatus(500)
    });
})



module.exports = router;
