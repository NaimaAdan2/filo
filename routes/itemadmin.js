const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/Users.js')
const path = require('path');
const Item = require('../models/Items.js');
const Request = require('../models/Requests.js');


  router.get('/:id', (req, res) => {
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
    })

    router.post("/:id", (req, res) => {
      Request.findOne({where: {id: req.params.id}})
      .then(request => {
        request.update({requestStatus: req.body.requestStatus})
        .then(foundReq => res.redirect("/itemadmin/" + foundReq.itemID))
      })
    })

module.exports = router;
