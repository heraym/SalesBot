var Productos = require('./productos');

var productos = new Productos('heraym');
productos.categoriasLinea('PaaS', callback);

function callback(categorias) {
 for (var i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
 }
}