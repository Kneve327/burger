var express = require('express');
var router = express();

// Import the model to use its database functions.
var burger = require('../models/burger.js');

router.get('/', function(req, res){
	// Get burgers to display on page
	burger.selectAll(function(data){
		
		res.render("index", data);
	});
});

router.post('/', function(req, res){
	// Create new burger then reload page
	burger.insertOne(req.body.burger, function(data){
		res.redirect('/', data);
	});
});

router.put('/api/burgers/:id', function(req, res){
	// Update burger as devoured
	burger.updateOne(req.params.id, function(result){
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

// export the router
module.exports = router;