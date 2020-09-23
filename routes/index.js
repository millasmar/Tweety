const express = require('express');
const router = express.Router();
const parser = require("body-parser")
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next ) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true });
});

router.get('/users/:name', function (req, res, next) {
    let tweets = tweetBank.find({name: req.params.name});
    
    
    res.render( 'index', { tweets: tweets, showForm: true } );
  });

  router.get('/tweets/', function (req, res, next) {
    res.render( 'index', { showForm: true } );
  });

router.get('/tweets/:id', function (req, res, next) {
    let tweets = tweetBank.find({id: parseInt(req.params.id)});
    res.render( 'index', { tweets: tweets } );
  });

router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
  });



  module.exports = function (io) {
    // ...
    // definiciones de rutas, etc.
    // ...
    return router;
  };