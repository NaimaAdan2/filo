const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  if (req.session && req.session.user) {
    res.redirect("/items")
  } else {
    res.render('login', { layout: false });
  }
})

router.post('/', (req, res) => {
  return User.findOne({where: {username: req.body.username}})
  .then(maybeuser => {
      console.log("Req Password: " + req.body.password)
      if (maybeuser && bcrypt.compareSync(req.body.password, maybeuser.password)) {
        req.session.user = maybeuser
        res.redirect("/items")
      } else {
        res.render('login', {layout: false, unknownUser: true})
      }
  })
  .catch(err => console.log(err))
})


module.exports = router;
