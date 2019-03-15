"use strict"

var Productos = require('./productos');

module.exports =
    {
        metadata: () => ({
            name: 'ar.cloud.productosFamilia',
            properties: {
                familia: {type: "string", required: true},
				variable: {type: "string", required: true}
            },
            supportedActions: []
        }),
        invoke: (conversation, done) => {
             
            var familia = conversation.properties().familia;
			var variable = conversation.properties().variable;

			  var productos = new Productos('heraym');
			  productos.productosFamilia(familia, callback);

			  function callback(productos) {
				conversation.variable(variable, productos);
                conversation.keepTurn(true);
                conversation.transition();
                done(); 
			  }
               			 
        }
    };