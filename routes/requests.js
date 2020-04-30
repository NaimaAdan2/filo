const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Request = require('../models/Requests.js');
const path = require('path');
const {isLoggedIn, isAdmin} = require("./util.js")


/*
Post request endpoint for creating a request entry. Use the itemID given
in the id query param. Default to status requested. Returns a 500
if there is an error and redirects back to the items page
*/
router.post('/:itemID', (req, res) => {
  isLoggedIn(req, res)
  req.body.requestStatus = "requested"
  req.body.itemID = req.params.itemID

  Request.create(req.body)
    .then(item => res.redirect("/items"))
    .catch(err => {
      console.log("Could not create a request entry: " + err)
      res.sendStatus(500)
    });
})


/*
Post request endpoint for updating a request for an item. Searches the request table
for the request that has an item id matching the item id query param. Changes the request
entry based on user payload. Redirects back to the same page to show updated request.
*/
router.post("/modify/:id", (req, res) => {
  isLoggedIn(req, res)
  isAdmin(req, res)
  Request.findOne({where: {id: req.params.id}})
  .then(request => {
    request.update({requestStatus: req.body.requestStatus})
    .then(foundReq => res.redirect("/itemadmin/" + foundReq.itemID))
  })
  .catch(err => {
    res.sendStatus(500)
  });
})

module.exports = router;
