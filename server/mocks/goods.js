/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let goodsRouter = express.Router();

  goodsRouter.get('/', function(req, res) {
    res.send([{
        id:1,
        name:"食物油",
        description:"精选西西伯利亚纯种花生。",
        picture:"/img/Desert.jpg",
        minPic:"/img/Desert.jpg",
        count:0,
        shopId:1
      },{
          id:2,
          name:"菜籽油",
          description:"优选油菜，菜香四溢.",
          picture:"/img/Desert.jpg,/img/Desert.jpg",
          minPic:"/img/Desert.jpg",
          count:99,
          shopId:1
        }]
    );
  });

  goodsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  goodsRouter.get('/:id', function(req, res) {
    res.send({

        id: req.params.id

    });
  });

  goodsRouter.put('/:id', function(req, res) {
    res.send({
      'goods': {
        id: req.params.id
      }
    });
  });

  goodsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/goods', require('body-parser').json());
  app.use('/api/goods', goodsRouter);
};
