"use strict";

var Components = require('./components.js');

// Create a server instance
var server = Components('/components');

//set parameters as appropriate
var port = Number(process.env.PORT || 5000);
 

// Start the server listening..
console.log("Escuchando en puerto " + port);
server.listen(port);
