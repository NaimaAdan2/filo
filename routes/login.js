const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const bcrypt = require('bcrypt');


/*
Get request endpoint for displaying the items page. Redirects you to the
items page if there is already a user signed in to the session or the
login html page if there isn't
*/
router.get('/', (req, res) => {
  if (req.session && req.session.user) {
    res.redirect("/items")
  } else {
    res.render('login', { layout: false });
  }
})

/*
POST request endpoint for logging in as a user. Checks whether there is a user that
exists with the same username and if so checks if the hash of the password matches
that of the entry in the database. If there is no entry redirect you to the login page.
Returns a 500 if there is an error
*/
router.post('/', (req, res) => {
  return User.findOne({where: {username: req.body.username}})
  .then(maybeuser => {
      if (maybeuser && bcrypt.compareSync(req.body.password, maybeuser.password)) {
        req.session.user = maybeuser
        res.redirect("/items")
      } else {
        res.render('login', {layout: false, unknownUser: true})
      }
  })
  .catch(err => {
    console.log("Could not log in as a user: " + err)
    res.sendStatus(500)
  });
})


module.exports = router;
