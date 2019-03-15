"use strict"

var Productos = require('./productos');

module.exports =
    {
        metadata: () => ({
            name: 'ar.cloud.demoFamilia',
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
			  productos.demoFamilia(familia, callback);

			  function callback(demo) {
				conversation.variable(variable, demo);
                conversation.keepTurn(true);
                conversation.transition();
                done(); 
			  }
               			 
        }
    };