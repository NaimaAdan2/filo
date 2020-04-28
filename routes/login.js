const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
  if (req.session && req.session.user) {
    res.redirect("/items")
  } else {
    res.render('login', { layout: false });
  }
})

router.post('/', (req, res) => {
  return User.findOne({where: {username: req.body.username, password: req.body.password}})
  .then(maybeuser => {
      if (!maybeuser) {
          req.session.user = null
          res.redirect("/login")
      } else {
          req.session.user = maybeuser
          res.redirect("/items")
      }
  })
  .catch(err => console.log(err))
})



module.exports = router;
