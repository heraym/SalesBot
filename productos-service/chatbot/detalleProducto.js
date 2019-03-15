"use strict"

var Productos = require('./productos');

module.exports =
    {
        metadata: () => ({
            name: 'ar.cloud.detalleProducto',
            properties: {
                producto: {type: "string", required: true},
				variable: {type: "string", required: true},
				familia: {type: "string", required: true}
            },
            supportedActions: []
        }),
        invoke: (conversation, done) => {
             
            var producto = conversation.properties().producto;
			var variable = conversation.properties().variable;
			var familia = conversation.properties().familia;

			  var productos = new Productos('heraym');
			  productos.detalleProducto(producto, callback);

			  function callback(detalle) {
				conversation.variable(variable, detalle);
				conversation.variable(familia, detalle.Familia);
                conversation.keepTurn(true);
                conversation.transition();
                done(); 
			  }
               			 
        }
    };