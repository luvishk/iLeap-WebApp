//console.log("Hello World!!");

var express = require('express');
var mongojs = require('mongojs');
var db = mongojs("testingdb", ["serviceClients"])

var app = express();
var bodyParser = require('body-parser');
//var mongoose = require('mongoose');

//get and listen part of express api

/*
app.get('/', function(req, res){
  res.send('Hello World - The server is running!!');
});
*/
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // for parsing application/json

//app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/serviceClients", function(req, res) {

    //res.json([]);

    db.serviceClients.find(function(err, docs) {

    	res.json(docs);

    });

});

app.post("/serviceClients", function(req, res) {

	var svc = req.body;
	console.log(svc);

	db.serviceClients.insert(req.body, function(err, doc) {

		res.json(doc);
	});

});

app.listen(3000);

