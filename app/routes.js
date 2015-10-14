///
/// @filename : app/routes.js
///

var router = require('express').Router();
var test = require('./service/test');
var track = require('./service/track');

/* GET home page. */
router.get('/', test.GETIndex);
router.post('/', test.POSTPage);

router.get('/track', track.GETAllTracks);
router.post('/track', track.POSTTracks);
router.put('/track', track.ModifyTrack);

module.exports = router;