/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let goodsRouter = express.Router();

  goodsRouter.get('/', function(req, res) {
    res.send([{
        id:1,
        name:"天然压榨花生油",
        description:"优选白沙花生，粒粒饱满，传统手工压榨技术，第一时间运送到您手中.",
        picture:"/img/Desert.jpg",
        minPic:"/img/Desert.jpg",
        shopId:1
      },{
          id:2,
          name:"菜籽油",
          description:"优选油菜，菜香四溢.",
          picture:"/img/Desert.jpg",
          minPic:"/img/Desert.jpg",
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
