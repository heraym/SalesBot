var Productos = require('./productos');

var productos = new Productos('heraym');
productos.preciosProducto("Oracle Process Cloud Service", callback);

function callback(detalleProducto) {
 console.log("El part number de " + detalleProducto.Producto + " es " + detalleProducto.PartNumber);
}