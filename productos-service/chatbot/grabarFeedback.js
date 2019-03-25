"use strict"

var Feedback = require('./feedback');

module.exports =
    {
        metadata: () => ({
            name: 'ar.cloud.grabarFeedback',
            properties: {
                usuario: {type: "string", required: true},
				texto: {type: "string", required: true}
            },
            supportedActions: []
        }),
        invoke: (conversation, done) => {
             
            var usuario = conversation.properties().usuario;
			var texto = conversation.properties().texto; 

			  var feedback = new Feedback('heraym');
              feedback.grabarFeedback('vamos todavia');

			  conversation.keepTurn(true);
              conversation.transition();
              done(); 
			                  			 
        }
    };