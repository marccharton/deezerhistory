var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	// res.render('index', { title: 'Deezer History (The real one)' });
	if ('access_token' in req.cookies)
		res.render('index', { title: 'Deezer History', message: 'Connected'});
  	else
        res.render('index', { title: 'Deezer History', message: 'Not connected'});
});

module.exports = router;
