var Productos = require('./productos');

var productos = new Productos('heraym');
productos.lineas(callback);

function callback(lineas) {
 for (var i = 0; i < lineas.length; i++) {
    console.log(lineas[i]);
 }
}