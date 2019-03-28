var Productos = require('./chatbot/productos');

var productos = new Productos('heraym');
productos.familiasCategoria('Application Development', callback);

function callback(familias) {
 for (var i = 0; i < familias.length; i++) {
    console.log(familias[i]);
 }
}