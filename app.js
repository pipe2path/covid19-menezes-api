/**
 * Created by kevin on 2020-01-23
 */
var express = require('express'),
    app = express(),
    port = process.env.PORT || 4050,
    bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var vaccineRoute = require('./routes/vaccine-route.js');
vaccineRoute(app);

app.listen(port);

console.log('covid19-menezes API Server started on: ', port);