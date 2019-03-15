var Productos = require('./productos');

var productos = new Productos('heraym');
productos.familiasCategoria('Integration', callback);

function callback(familias) {
 for (var i = 0; i < familias.length; i++) {
    console.log(familias[i]);
 }
}