// 'use strict' this is a header that forces the javascript engine to apply a stricter 
// interpretation of your code. For more details take a look at
// https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it
'use strict';

// Require the modules we need 
var knx  	= require('knx_eibd').knx_event;
var WriteToBus  = require('knx_eibd').WriteToBus;

// Here we are requiring two databases
var db = require('../../node_modules/utilities/db').db
var objects_db = require('../../node_modules/utilities/db').objects_db

// This function receives a http request, then finds the current state of the "1/4/21"
// knx group address (stored in the db), then passes that value in the call back 
// to the switch_lights function. Then ends/sends a response to the client to say that 
// light has been switched

// Test function
exports.test = function(req, res) {

  db.find( { destination : "1/4/21<<CHANGE TO YOUR GROUP ADDRESS>>" } , function (err, docs) {
		var current_state = docs[0].value;
		switch_lights(current_state);
		res.end('The light was switched!');
  })
};

// Support function to switch the lights. It takes the current state, finds the opposite
// and send that to the bus
function switch_lights(current_state){
  var on_off = 1 - current_state;
  WriteToBus("1/4/20<<CHANGE TO YOUR GROUP ADDRESS>>", "DPT1", on_off); // You may have to change the DPT type too
};


exports.home = function(req, res) {
	res.render("home");
};


var images = [
            {name:"MTN649208", description:"Actuador Binário", src:"http://sigma.octopart.com/82891339/image/Schneider-Electric-MTN649208.jpg", index:6},
            {name:"MTN649802", description:"Actuador Estores", src:"http://gds-eshop.com/files/imagecache/product_full/P123569-PPT.jpg", index:2},
            {name:"MTN649330", description:"Actuador Regulação", src:"http://www.harveyjames.net/uploads/images/l/fm_2013_10_18_09_50_37_52112.jpg", index:2}
        ];

exports.addDevice = function(req,res) {
	res.render("add_device.ejs",{images: images});

};

exports.testDevice = function(req, res) {
	res.render("test_device.ejs");

};


var groups = [];

exports.saveDevice = function(req, res) {

	var 	devName = req.body.name,
		group1 = req.body.group1,
		group2 = req.body.group2,
		group3 = req.body.group3,
		group4 = req.body.group4,
		group5 = req.body.group5,
		group6 = req.body.group6;

	if(devName === images[0].name){
		var newDevice = {group1: group1,
				 group2: group2,
				 group3: group3,
				 group4: group4,
				 groyp5: group5,
				 group6: group6,
				 devName: devName};
	}else if(devName === images[0].name){
		var newDevice = {group1: group1,
				 group2: group2,
				 devName:devName};

	}else{
		var newDevice = {group1: group1,
                                 group2: group2,
				 devName: devName};
	}
	groups.push(newDevice);

	console.log(newDevice);
	//res.redirect("add_device");
	res.render("add_device",{images: images});
	
};
