///
/// @filename : app/app.js
/// @date_creation : 13/10/2105
///

// // // // // // // // // // // // // // //
// -- M O D U L E S                         
// // // // // // // // // // // // // // // 

var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


// // // // // // // // // // // // // // //  
// -- R O U T E S
// // // // // // // // // // // // // // //  

var routes = require('./routes');


// // // // // // // // // // // // // // //  
// VIEW ENGINE SETUP
// // // // // // // // // // // // // // //  

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// // // // // // // // // // // // // // //  
// M I D D L E W A R E S
// // // // // // // // // // // // // // //  

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// // // // // // // // // // // // // // //  
// E R R O R S
// // // // // // // // // // // // // // //  

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send("Error not catched");
        /*
        res.render('error', {
            message: err.message,
            error: err
        });
        */
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send("Error not catched");
    /*
    res.render('error', {
        message: err.message,
        error: {}
    });
    */
});

module.exports = app;
