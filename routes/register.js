const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');



router.get('/', (req, res) => {
      res.render('register', { layout: false });

       // User.findOne({where: {username: req.body.username}})
        //.then(maybeuser => {
          //  if (!maybeuser) {
            //    return User.create(req.body)
              //  .then(user => {
                //    res.send("Created user")
                //})
            //} else {
              //  res.send("Already exists")
            //}
       // })
        //.catch(err => console.log(err))
})



module.exports = router;
