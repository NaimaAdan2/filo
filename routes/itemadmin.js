const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const Item = require('../models/Items.js');
const Request = require('../models/Requests.js');
const {isLoggedIn, isAdmin} = require("./util.js")


/*
All endpoints redirects return a 401 if the user is not logged in and the user is not admin
*/


/*
Get request endpoint for getting an item as an admin. Searches the items table
for the item that has an id matching the id query param. Also gets all requests that
match the id query param. Sends back a 500 if there
is an error
*/
router.get('/:id', (req, res) => {
  isLoggedIn(req, res)
  isAdmin(req, res)
  Item.findAll({where: {id: req.params.id}})
  .then(items => {
    Request.findAll({where: {itemID: req.params.id}})
    .then(requests => {
      let unresolvedRequests = []
      let resolvedRequests = []
      for (request of requests) {
        if (request.requestStatus == "requested") {
          unresolvedRequests.push(request)
        } else {
          resolvedRequests.push(request)
        }
      }
      res.render('itemadmin', { layout: false, items, unresolvedRequests: unresolvedRequests, resolvedRequests: resolvedRequests });
      })
    })
    .catch(err => {
      console.log("Could not get item as admin: " + err)
      res.sendStatus(500)
    });
  })

module.exports = router;
