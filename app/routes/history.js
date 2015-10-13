var express = require('express');
var router = express.Router();
var fs = require('fs');
var http = require('http');

// var mongoose = require('mongoose');
// var History = require('../models/History.js');

//  G E T   :   '/'
router.get('/', function(req, res, next) {
    var pathstr = "/user/me/history";
    pathstr += "?access_token=" + req.cookies.access_token;
    pathstr += "&limit=" + 50;
    pathstr += "&index=" + 0;
    var options = { host: 'api.deezer.com', path: pathstr};
    console.log(pathstr);
    http.request(options, function(response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });

        response.on('end', function () {
            var history = JSON.parse(str);
            res.send(history.data);
        });
    }).end();
});

//  P O S T   :   '/'
router.post('/', function(req, res, next) {
    console.log("je suis dans POST '/'.");
    res.send("je suis dans POST '/'.");
});

//  D E L E T E   :   '/'
router.delete('/', function(req, res, next) {
    console.log("je suis dans DELETE '/'.");
    res.send("je suis dans DELETE '/'.");
});


//  G E T   :   '/:id'
router.get('/:id', function(req, res, next) {
    var pathstr = "/track/1571394";
    pathstr += "?access_token=" + req.cookies.access_token;

    var options = { host: 'api.deezer.com', path: pathstr};
    
    console.log(pathstr);
    http.request(options, function(response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });

        response.on('end', function () {
            var history = JSON.parse(str);
            res.send(history);
        });
    }).end();

});

//  P U T   : '/:id'
router.put('/:id', function(req, res, next) {
    console.log("je suis dans PUT '/:id'.");
    res.send("je suis dans PUT '/:id'.");
  // History.findByIdAndUpdate(req.params.id, req.body, function (err, song) {
  //   if (err) return next(err);
  //   res.json(song);
  // });
});

//  D E L E T E   : '/:id'
router.delete('/:id', function(req, res, next) {
    console.log("je suis dans DELETE '/:id'.");
    res.send("je suis dans DELETE '/:id'.");
  // History.findByIdAndRemove(req.params.id, req.body, function (err, song) {
  //   if (err) return next(err);
  //   res.json(song);
  // });
});

module.exports = router;
