var Productos = require('./productos');

var productos = new Productos('heraym');
productos.preciosProducto("Oracle Process Cloud Service", callback);

function callback(detalleProducto) {
 console.log(detalleProducto.Producto + " se licencia " + detalleProducto.Precio + " USD por " + detalleProducto.Metrica);
 if (detalleProducto.PayAsYouGo != "") {
  console.log("En el caso de PayAsYouGo sale " + detalleProducto.PayAsYouGo + " USD");
 }
}