var Productos = require('./chatbot/productos');

var productos = new Productos('heraym');
productos.categoriasLinea('PaaS', callback);

function callback(familias) {
     console.log(familias);

}