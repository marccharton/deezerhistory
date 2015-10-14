///
/// @filename : app/routes.js
/// @date_creation : 13/10/2105
///

// // // // // // // // // // // // // 
// D E P E N D E N C I E S

var bodyParser = require('body-parser');
var express = require('express');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

var router = require('express').Router();
var test = require('./service/test');
var track = require('./service/track');
var api = require('./service/api');


// // // // // // // // // // // // // 
// R O U T E S

router.get('/', test.GETIndex);
router.post('/', test.POSTPage);

router.get('/track', track.GETAllTracks);
router.post('/track', track.POSTTracks);
router.put('/track', track.ModifyTrack);

router.get('/api/getcode', api.GetCode);
router.get('/api/gettoken', api.GetToken);
router.get('/api/deletetoken', api.DeleteToken);
router.get('/api/call/userinfo', api.GetUserInformations);
router.get('/api/call/history', api.GetHistoryList);


module.exports = router;