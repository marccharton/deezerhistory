var bodyParser = require('body-parser');
var express = require('express');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
var router = express.Router();

// GET home page
router.get('/api', function(req, res, next) {
});

// GET '/api/getcode' 
router.get('/getcode', function(req, res, next) {
    var app_id = "152891";
    var redirect_uri = "http://localhost:3000/api/gettoken";

    var url = "https://connect.deezer.com/oauth/auth.php";
    url += "?app_id=" + app_id;
    url += "&redirect_uri=" + redirect_uri;
    url += "&perms=" + "basic_access" + ",email" + ",listening_history";
    
    res.redirect(url);
});

// GET '/api/gettoken'
router.get('/gettoken', function(req, res, next) {
    var apiId = "152891";
    var secret = "c4f95a095b70fb98753b9d8e904de152";

    if (typeof req.param('code') == 'undefined')
    {
        if (typeof req.param('error_reason') != 'undefined')
            res.send("Impossible de récupérer les infos de l'API car tu as refusé !!!<br /> raison de l'erreur : " + req.param('error_reason')).end();
        else
            res.send("j'ai rien compris mais apparement j'ai pas de code !").end();
    }
    else
    {
        console.log("ouech les amis");
    }

    var code = req.param('code');
    var apiconnectUrl = "/oauth/access_token.php";
    apiconnectUrl += "?app_id="+apiId;
    apiconnectUrl += "&secret="+secret;
    apiconnectUrl += "&code="+code;

    var options = { host: 'connect.deezer.com', path: apiconnectUrl };
    
    http.request(options, function(response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });

        response.on('end', function () {
            var params = querystring.parse(str);
            if ('access_token' in params)
                res.cookie("access_token", params.access_token);
            if ('expires' in params)
                res.cookie("expires", params.expires);
            res.redirect("/");
        });
    }).end();
});

// GET '/api/deletetoken' 
router.get('/deletetoken', function (req, res, next) {
    res.clearCookie('access_token');
    res.redirect('/');
});


// GET '/api/call/userinfo' 
router.get('/call/userinfo', function (req, res, next) {
    var pathstr = "/user/me";
    var token = "?access_token=" + req.cookies.access_token;
    var options = { host: 'api.deezer.com', path: pathstr + token};

    http.request(options, function(response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });

        response.on('end', function () {
            var ret = "";
            var user = JSON.parse(str);
            res.cookie("user", user);
            ret += "Bonjour " + user.firstname + " " + user.lastname + " ! <br />";
            ret += "Ton pseudo est : " + user.name + " <br />";
            ret += "Ton mail est : " + user.email + " <br />";
            ret += "Tu t'es inscrit sur deezer le : " + user.inscription_date + " <br />";
            res.send(ret);
        });
    }).end();
});

// GET '/api/call/history' 
router.get('/call/history', function (req, res, next) {
    var pathstr = "/user/me/history";
    pathstr += "?access_token=" + req.cookies.access_token;
    pathstr += "&limit=" + 100;
    pathstr += "&index=" + 0;
    var options = { host: 'api.deezer.com', path: pathstr};

    http.request(options, function(response) {
        var str = '';
        response.on('data', function (chunk) { str += chunk; });

        response.on('end', function () {
            var ret = "";
            var history = JSON.parse(str);
            ret += "Les dernières chansons que tu as écouté : <br />\n<ul>";
            for (var i = 0 ; i < history.data.length ; i++) {
                ret += "<li data-songid='"+history.data[i].id+"''> '" + history.data[i].title + "'' de '" + history.data[i].artist.name + "'."; // + "<a href='"+history.data[i].preview+"'>Ecouter un extrait</a>";
                    ret += "<audio controls>";
                        ret += "<source src='"+history.data[i].preview+"' type='audio/mp4'>";
                        ret += "<p>Your user agent does not support the HTML5 Audio element.</p>";
                    ret += "</audio>";
                ret += "</li>";
            }
            
            ret += "</ul>";
            res.send(ret);
        });
    }).end();
});

// 



module.exports = router;
