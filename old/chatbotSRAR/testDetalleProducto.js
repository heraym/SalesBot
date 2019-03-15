var Productos = require('./productos');

var productos = new Productos('heraym');
productos.detalleProducto('B88362', callback);

function callback(productos) {
 for (var i = 0; i < productos.length; i++) {
    console.log(productos[i]);
 }
}