"use strict"

var Productos = require('./productos');

module.exports =
    {
        metadata: () => ({
            name: "ar.cloud.categoriasLinea",
            properties: {
                linea: {type: "string", required: true},
				variable: {type: "string", required: true}
            },
            supportedActions: []
        }),
        invoke: (conversation, done) => {
             
            var linea = conversation.properties().linea;
			var variable = conversation.properties().variable;
            var userId = "";                
             if (conversation.channelType() == "facebook") {
                       userId = conversation.payload().sender.id;
              }
              else {
                 userId = conversation.payload().userId;
              }
             console.log("Categorias de Linea " + linea);

			  var productos = new Productos('heraym');
			  productos.categoriasLinea(linea, callback);

			  function callback(categorias) {
			       console.log(JSON.stringify(categorias));
				conversation.variable(variable, categorias);
                                conversation.keepTurn(true);
                                conversation.transition();
                                done(); 
			  }
               			 
        }
    };
