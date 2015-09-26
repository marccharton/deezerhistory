var express = require('express');
var router = express.Router();
var fs = require('fs');

var mongoose = require('mongoose');
var History = require('../models/History.js');

//  G E T   :   '/'
router.get('/', function(req, res, next) {
    History.find(function (err, historyItems) {
        if (err) 
            return next(err);
        res.json(historyItems);
    });
});

//  P O S T   :   '/'
router.post('/', function(req, res, next) {
    console.log("je suis dans POST '/'.");

    var existingItems;
    fs.readFile('data/deezer_history.json', 'utf8', function (err, data) {
        console.log("je suis dans readFile");
        if (err) throw err;
        existingItems = JSON.parse(data);
        console.log("j'ai défini existingItems !! ");

        console.log("length de existingItems " + existingItems.length);
        for (var i = 0 ; i < existingItems.length ; i++) {
            console.log("existingItems[" + i + "].title = " + existingItems[i].title);
            History.create(existingItems[i], function (err, song) {if (err) return next(err);});
        }
        res.end(existingItems.length + " Elements parsés");
    });

    // res.send("Yop c'est bon t'as enregistré tes données.");

    // History.create(req.body, function (err, song) {
    //     if (err) 
    //         return next(err);
    //     res.json(song);
    // });
});

//  D E L E T E   :   '/'
router.delete('/', function(req, res, next) {
    History.remove(function (err, nbDeleted) {
        if (err) 
            return next(err);
        res.send("Number of items deleted = " + nbDeleted);
  });
});


//  G E T   :   '/:id'
router.get('/:id', function(req, res, next) {
    History.findById(req.params.id, function (err, song) {
        if (err) 
            return next(err);
        res.json(song);
    });
});

//  P U T   : '/:id'
router.put('/:id', function(req, res, next) {
  History.findByIdAndUpdate(req.params.id, req.body, function (err, song) {
    if (err) return next(err);
    res.json(song);
  });
});

//  D E L E T E   : '/:id'
router.delete('/:id', function(req, res, next) {
  History.findByIdAndRemove(req.params.id, req.body, function (err, song) {
    if (err) return next(err);
    res.json(song);
  });
});

module.exports = router;
