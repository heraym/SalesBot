"use strict"

var Productos = require('./productos');

module.exports =
    {
        metadata: () => ({
            name: 'ar.cloud.familiasCategoria',
            properties: {
                categoria: {type: "string", required: true},
				variable: {type: "string", required: true}
            },
            supportedActions: []
        }),
        invoke: (conversation, done) => {
             
            var categoria = conversation.properties().categoria;
			var variable = conversation.properties().variable;

			  var productos = new Productos('heraym');
			  productos.familiasCategoria(categoria, callback);

			  function callback(familias) {
				conversation.variable(variable, familias);
                conversation.keepTurn(true);
                conversation.transition();
                done(); 
			  }
               			 
        }
    };