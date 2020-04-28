const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');


router.get('/', (req, res) => {
        res.render('login', { layout: false });
})

router.post('/', (req, res) => {
  return User.findOne({where: {username: req.body.username, password: req.body.password}})
  .then(maybeuser => {
    console.log("Maybe User: " + maybeuser)
      if (!maybeuser) {
          return res.redirect("/login")
      } else {
          return res.redirect("/items")
      }

  })
  .catch(err => console.log(err))
})



module.exports = router;
