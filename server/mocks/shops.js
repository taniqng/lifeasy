/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let shopsRouter = express.Router();

  shopsRouter.get('/', function(req, res) {
    res.send({
      'shops': []
    });
  });

  shopsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  shopsRouter.get('/:id', function(req, res) {
    res.send({

        id: req.params.id,
        name: "testShop"

    });
  });

  shopsRouter.put('/:id', function(req, res) {
    res.send({
      'shops': {
        id: req.params.id
      }
    });
  });

  shopsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  // app.use('/api/shops', require('body-parser').json());
  app.use('/api/shops', shopsRouter);
};
